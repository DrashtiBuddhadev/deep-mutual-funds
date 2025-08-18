/// <reference types="node" />

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, fullName, email, phone, message } = req.body;
    
    // Handle both form types - use name or fullName
    const customerName = name || fullName;
    
    if (!customerName || !email || !phone) {
      return res.status(400).json({ 
        message: 'Name, email, and phone are required fields' 
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'buddhadevdrashti@gmail.com',
        pass: 'ehwa fwsm fwgh hsgc'
      }
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
      from: 'buddhadevdrashti@gmail.com',
      to: '211260116010setiit@gmail.com',
      subject: `New Contact Form Submission from ${customerName}`,
      html: emailContent
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true,
      message: 'Your message has been sent successfully! We will contact you within 24 hours.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error sending email', 
      error: error.message 
    });
  }
}