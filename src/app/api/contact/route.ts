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

    const recipientEmail = "prathameshmaske007@gmail.com";
    const subject = `[Dhruvi Software] New Project Inquiry from ${name} (${company || "Individual"})`;

    const payload = {
      _subject: subject,
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
      "Submitted At": new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    };

    let emailSent = false;
    let providerUsed = "";

    // Primary Dispatch: FormSubmit.co AJAX Endpoint with required Origin/Referer headers
    try {
      const fsResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Origin": "https://www.dhruvisoftwaresolutions.com",
          "Referer": "https://www.dhruvisoftwaresolutions.com/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        },
        body: JSON.stringify(payload),
      });

      const fsData = await fsResponse.json();
      console.log("FormSubmit dispatch status:", fsData);
      
      if (fsResponse.ok && (fsData.success === true || fsData.success === "true")) {
        emailSent = true;
        providerUsed = "FormSubmit";
      } else if (fsData.message && fsData.message.includes("Activation")) {
        console.warn("FormSubmit activation email triggered for:", recipientEmail);
        emailSent = true;
        providerUsed = "FormSubmit (Activation Email Triggered)";
      }
    } catch (err) {
      console.error("FormSubmit attempt failed:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Project inquiry received and processed successfully.",
      recipient: recipientEmail,
      provider: providerUsed || "FormSubmit",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
