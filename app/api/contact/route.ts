export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const resend = (await import('resend')).Resend
    const emailClient = new resend(process.env.RESEND_API_KEY)

    const result = await emailClient.emails.send({
      from: 'noreply@justcream.site',
      to: 'logosbola@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (result.error) {
      console.error('Email error:', result.error)
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return Response.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
