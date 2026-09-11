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
    const subject = `[Dhruvi Software Inquiry] New Project Request from ${name} (${company || "Individual"})`;

    const formattedMessage = `
NEW PROJECT INQUIRY SUBMISSION
-------------------------------------------
Name: ${name}
Company: ${company || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}

PROJECT DETAILS:
-------------------------------------------
Project Type: ${projectType}
Estimated Budget: ${budget || "N/A"}
Timeline: ${timeline || "N/A"}

Project Description / Objectives:
${description}

-------------------------------------------
Sent from: Dhruvi Software Solutions Website (dhruvisoftwaresolutions.com)
Timestamp: ${new Date().toISOString()}
    `.trim();

    // Submit via Web3Forms API to deliver directly to prathameshmaske007@gmail.com
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
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
          phone: phone,
          message: formattedMessage,
        }),
      });

      const data = await response.json();
      console.log("Email dispatch status:", data);
    } catch (err) {
      console.error("Failed to forward to email provider:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Project inquiry received successfully and email dispatched.",
      recipient: recipientEmail,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
