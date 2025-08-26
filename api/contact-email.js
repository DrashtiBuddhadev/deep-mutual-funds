/// <reference types="node" />

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, fullName, email, phone, message } = req.body;
    
    // Handle both form types - use name or fullName
    const customerName = name || fullName;
    
    if (!customerName || !email || !phone) {
      return res.status(400).json({ 
        success: false,
        message: 'Name, email, and phone are required fields' 
      });
    }

    // Create transporter - using environment variables or fallback
    const gmailUser = process.env.GMAIL_USER || 'deepmistry1118@gmail.com';
    const gmailPass = process.env.GMAIL_PASS || 'ewwt xxsq byut jwrw';
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Email content - handle forms with and without message field
    const emailContent = message 
      ? `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
      : `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><em>No message provided (form without message field)</em></p>
      `;

    const mailOptions = {
      from: gmailUser,
      to: 'deep@deepinvestment.co',
      subject: `New Contact Form Submission from ${customerName}`,
      html: emailContent,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true,
      message: 'Your message has been sent successfully! We will contact you within 24 hours.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Ensure we always return JSON
    if (!res.headersSent) {
      res.status(500).json({ 
        success: false,
        message: 'Failed to send email. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      });
    }
  }
}