import emailjs from 'emailjs-com';

export async function POST(request) {
  try {
    const { name, phone, email, company, subject, message } = await request.json();

    // Validar campos requeridos
    if (!name || !phone || !email || !subject || !message) {
      return Response.json({ 
        error: 'Missing required fields',
        required: ['name', 'phone', 'email', 'subject', 'message']
      }, { status: 400 });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Configurar EmailJS con variables de entorno
    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

    // Verificar que las credenciales estén configuradas
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS credentials not configured');
      return Response.json({ error: 'Email service not configured' }, { status: 500 });
    }

    // Preparar los datos del template
    const templateParams = {
      from_name: name,
      from_phone: phone,
      from_email: email,
      from_company: company || 'No especificada',
      subject: subject,
      message: message,
      to_name: 'Crystal Service'
    };

    // Enviar email usando EmailJS
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

    // Log del resultado (sin información sensible)
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
    
    // Manejar errores específicos de EmailJS
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