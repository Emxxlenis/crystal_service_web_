import emailjs from 'emailjs-com';

export async function POST(request) {
  try {
    const { name, phone, email, company, subject, message } = await request.json();

    // Validate required fields
    if (!name || !phone || !email || !subject || !message) {
      return Response.json({ 
        error: 'Missing required fields',
        required: ['name', 'phone', 'email', 'subject', 'message']
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Get EmailJS credentials from environment
    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

    // Check if credentials are configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS credentials not configured');
      return Response.json({ error: 'Email service not configured' }, { status: 500 });
    }

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_phone: phone,
      from_email: email,
      from_company: company || 'Not specified',
      subject: subject,
      message: message,
      to_name: 'Crystal Service'
    };

    // Send email using EmailJS
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

    // Log success (without sensitive data)
    console.log('Email sent successfully:', {
      to: email,
      subject: subject,
      timestamp: new Date().toISOString()
    });

    return Response.json({ 
      success: true, 
      message: 'Email sent successfully',
      id: result.text // ID de la transacción de EmailJS
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Handle EmailJS specific errors
    if (error.text) {
      return Response.json({ 
        error: 'Failed to send email',
        details: error.text
      }, { status: 400 });
    }

    return Response.json({ 
      error: 'Internal server error',
      message: 'Failed to send email'
    }, { status: 500 });
  }
} 