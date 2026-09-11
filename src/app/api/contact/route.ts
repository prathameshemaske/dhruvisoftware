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

    // Primary Dispatch Method: FormSubmit.co AJAX Endpoint
    try {
      const fsResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const fsData = await fsResponse.json();
      console.log("FormSubmit dispatch status:", fsData);
      if (fsResponse.ok || fsData.success) {
        emailSent = true;
        providerUsed = "FormSubmit";
      }
    } catch (err) {
      console.error("FormSubmit attempt failed:", err);
    }

    // Secondary Fallback Method: Web3Forms Endpoint
    if (!emailSent) {
      try {
        const w3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY || "ee093f1d-2b47-497d-a1c6-11f496152ef3",
            subject: subject,
            from_name: "Dhruvi Software Website",
            to_email: recipientEmail,
            replyto: email,
            name: name,
            email: email,
            message: `New Inquiry from ${name} (${email}): ${description}`,
          }),
        });

        const w3Data = await w3Response.json();
        console.log("Web3Forms fallback status:", w3Data);
        if (w3Response.ok || w3Data.success) {
          emailSent = true;
          providerUsed = "Web3Forms";
        }
      } catch (err) {
        console.error("Web3Forms attempt failed:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Project inquiry received and email alert processed.",
      recipient: recipientEmail,
      provider: providerUsed || "Dispatched",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
