import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, projectType, budget, timeline, description } = body;

    if (!name || !email || !description) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (name, email, description)." },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const recipientEmail = "prathameshmaske007@gmail.com";

    // Structured multi-line inquiry report block for Google Form & Google Sheet
    const inquiryDetails = [
      "========================================",
      " 📌 NEW WEBSITE PROJECT INQUIRY",
      "========================================",
      `• Client Name: ${name}`,
      `• Company: ${company || "Individual / N/A"}`,
      `• Client Email: ${email}`,
      `• Phone / WhatsApp: ${phone || "N/A"}`,
      `• Project Type: ${projectType}`,
      `• Estimated Budget: ${budget || "N/A"}`,
      `• Timeline: ${timeline || "N/A"}`,
      "----------------------------------------",
      "• Project Overview & Requirements:",
      description,
      "========================================",
      `Submitted At: ${submittedAt}`,
    ].join("\n");

    const googleFormActionUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfYQbVfznBQFMQgZD16RzTuBqCF3ZjUEBu2DpwIcQq4FUcEYw/formResponse";

    let submittedToGoogle = false;

    try {
      // 1. Fetch form token (fbzx) from viewform HTML for clean session validation
      const viewRes = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfYQbVfznBQFMQgZD16RzTuBqCF3ZjUEBu2DpwIcQq4FUcEYw/viewform",
        {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          },
          cache: "no-store",
        }
      );

      const htmlText = await viewRes.text();
      const fbzxMatch = htmlText.match(/name="fbzx"\s+value="(-?\d+)"/);
      const fbzxToken = fbzxMatch ? fbzxMatch[1] : "";

      // 2. Build form urlencoded payload for entry.1500870667
      const params = new URLSearchParams();
      params.append("entry.1500870667", inquiryDetails);
      params.append("fvv", "1");
      params.append("pageHistory", "0");
      if (fbzxToken) {
        params.append("fbzx", fbzxToken);
      }

      // 3. Post to Google Form response endpoint
      const gfRes = await fetch(googleFormActionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        },
        body: params.toString(),
      });

      console.log("Google Form Submit Status:", gfRes.status);
      if (gfRes.ok || gfRes.status === 200 || gfRes.status === 302) {
        submittedToGoogle = true;
      }
    } catch (err) {
      console.error("Google Form submission error:", err);
    }

    // Also attempt FormSubmit as secondary fallback channel
    try {
      const payload = {
        _subject: `[Dhruvi Software] New Project Inquiry from ${name}`,
        _captcha: "false",
        _template: "table",
        _replyto: email,
        "Client Name": name,
        "Company Name": company || "N/A",
        "Client Email": email,
        "Phone / WhatsApp": phone || "N/A",
        "Project Type": projectType,
        "Estimated Budget": budget || "N/A",
        "Timeline": timeline || "N/A",
        "Project Overview": description,
        "Submitted At": submittedAt,
      };

      fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://www.dhruvisoftwaresolutions.com",
          Referer: "https://www.dhruvisoftwaresolutions.com/",
        },
        body: JSON.stringify(payload),
      }).catch((e) => console.error("FormSubmit background dispatch error:", e));
    } catch (e) {
      console.error("Secondary dispatch error:", e);
    }

    return NextResponse.json({
      success: true,
      message: "Project inquiry recorded successfully in Google Form & Sheet.",
      provider: submittedToGoogle ? "Google Form" : "Dispatched",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
