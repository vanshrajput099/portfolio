import { Resend } from 'resend';
import Template from "@/email/Template"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, projectInquiry, message } = body;

        if ([name, email, projectInquiry, message].some(ele => ele.trim() === "")) {
            return Response.json({ message: "Please fill all the details" }, { status: 401 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['vanshrajput099@gmail.com'],
            subject: 'Portfolio Message',
            react: Template({ name, email, projectInquiry, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ message: "Mail has been sended successfully." }, { status: 200 });;
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}