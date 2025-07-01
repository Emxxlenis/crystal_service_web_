import emailjs from 'emailjs-com';

export default async function handler(req, res) {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, company, subject, message } = req.body;

    // Validar campos requeridos
    if (!name || !phone || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'phone', 'email', 'subject', 'message']
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Configurar EmailJS con variables de entorno
    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

    // Verificar que las credenciales estén configuradas
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS credentials not configured');
      return res.status(500).json({ error: 'Email service not configured' });
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

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: result.text // ID de la transacción de EmailJS
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Manejar errores específicos de EmailJS
    if (error.text) {
      return res.status(400).json({ 
        error: 'Failed to send email',
        details: error.text
      });
    }

    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to send email'
    });
  }
} 