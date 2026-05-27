import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { Resend } from "resend";

// CORS headers — restrict to your domain in production
const CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

interface RequestBody {
  name?: string;
  email?: string;
  company?: string;
  country?: string;
  category?: string;
  volume?: string;
  message?: string;
}

export async function sendEmailHandler(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  // Handle CORS preflight
  if (request.method === "OPTIONS") {
    return { status: 204, headers: CORS };
  }

  try {
    const body = (await request.json()) as RequestBody;

    // Basic validation
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();

    if (!name || !email) {
      return {
        status: 400,
        jsonBody: { error: "Name and email are required." },
        headers: CORS,
      };
    }

    // Simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        status: 400,
        jsonBody: { error: "Invalid email address." },
        headers: CORS,
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL ?? "support@maya-appli.fr";
    const toEmail = process.env.TO_EMAIL ?? "Mohammed@afrisourcegroup.com";

    if (!apiKey) {
      context.error("RESEND_API_KEY is not set");
      return {
        status: 500,
        jsonBody: { error: "Server configuration error." },
        headers: CORS,
      };
    }

    const resend = new Resend(apiKey);

    const category = body.category?.trim() || "General";
    const company = body.company?.trim() || "—";
    const country = body.country?.trim() || "—";
    const volume = body.volume?.trim() || "—";
    const message = body.message?.trim() || "—";

    const subject = `[AfriSource] New Sourcing Request — ${category} — ${company}`;

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.08); }
    .header { background: #0A2540; padding: 32px 40px; }
    .header h1 { color: #ffffff; font-size: 22px; margin: 0; font-weight: 700; }
    .header p  { color: rgba(255,255,255,0.55); font-size: 13px; margin: 6px 0 0; }
    .badge { display: inline-block; background: #D4AF37; color: #000; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; }
    .body { padding: 36px 40px; }
    .row { margin-bottom: 20px; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #5A6C7D; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0A2540; }
    .divider { border: none; border-top: 1px solid #E1E4E8; margin: 24px 0; }
    .message-box { background: #F5F3EF; border-radius: 12px; padding: 16px 20px; font-size: 14px; color: #374151; line-height: 1.6; }
    .footer { padding: 20px 40px; background: #F8F9FA; text-align: center; font-size: 12px; color: #9CA3AF; border-top: 1px solid #E1E4E8; }
    .reply-btn { display: inline-block; margin-top: 24px; background: #D4AF37; color: #000; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 12px; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="badge">New Sourcing Request</div>
      <h1>Request Access — ${category}</h1>
      <p>Submitted via afrisourcegroup.com</p>
    </div>
    <div class="body">
      <div class="row">
        <div class="label">Full Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="row">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}" style="color:#0A2540">${email}</a></div>
      </div>
      <div class="row">
        <div class="label">Company</div>
        <div class="value">${company}</div>
      </div>
      <div class="row">
        <div class="label">Country / Target Market</div>
        <div class="value">${country}</div>
      </div>
      <hr class="divider" />
      <div class="row">
        <div class="label">Product Category</div>
        <div class="value">${category}</div>
      </div>
      <div class="row">
        <div class="label">Estimated Volume / Specs</div>
        <div class="value">${volume}</div>
      </div>
      <div class="row">
        <div class="label">Additional Message</div>
        <div class="message-box">${message.replace(/\n/g, "<br/>")}</div>
      </div>
      <a href="mailto:${email}?subject=Re: Your AfriSource Sourcing Request — ${category}" class="reply-btn">
        Reply to ${name}
      </a>
    </div>
    <div class="footer">
      AfriSource Group · contact@afrisourcegroup.com · afrisourcegroup.com
    </div>
  </div>
</body>
</html>
    `.trim();

    const { data, error } = await resend.emails.send({
      from: `AfriSource Group <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      context.error("Resend error:", error);
      return {
        status: 502,
        jsonBody: { error: "Failed to send email. Please try again." },
        headers: CORS,
      };
    }

    context.log("Email sent successfully:", data?.id);
    return {
      status: 200,
      jsonBody: { success: true, id: data?.id },
      headers: CORS,
    };
  } catch (err: unknown) {
    context.error("Unexpected error:", err);
    return {
      status: 500,
      jsonBody: { error: "Unexpected server error." },
      headers: CORS,
    };
  }
}

app.http("sendEmail", {
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  handler: sendEmailHandler,
});
