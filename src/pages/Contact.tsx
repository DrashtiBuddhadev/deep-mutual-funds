import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      setIsLoading(false);
      return;
    }

    // Phone validation (basic 10 digit check)
    const phoneDigits = formData.phone.replace(/[^\d]/g, '');
    if (phoneDigits.length !== 10) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid 10-digit phone number.',
      });
      setIsLoading(false);
      return;
    }

    try {
      // For development, we'll simulate the email sending
      // In production (on Vercel), this will use the actual API
      const isDevelopment = import.meta.env.DEV;
      
      let response;
      
      if (isDevelopment) {
        // Simulate a successful API call in development
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
        response = {
          ok: true,
          json: async () => ({
            success: true,
            message: 'Your message has been sent successfully! We will contact you within 24 hours. (Development Mode - No actual email sent)',
          })
        };
      } else {
        // Production API call
        response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: result.message || 'Your message has been sent successfully! We will contact you within 24 hours.',
      });
      
      // Reset form on success
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  return (
    <Layout>
      <Hero 
        title="Contact Us"
        subtitle="Ready to take the next step? We're here to help. Whether you need support with wealth planning, investment advice, business risk strategy, or estate protection, our team is ready to assist you. Choose the contact option that suits you best."
        showCTA={false}
        className="hero-no-circular"
      />

      {/* Get in Touch - CTA Style Section */}
      <section 
        className="py-16 lg:py-24 relative"
        style={{
          backgroundImage: "url('/images/bg-option2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-6">
                  Get in Touch
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email Us</h3>
                    <p className="text-primary font-medium">deepinvestment2003@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Call Us</h3>
                    <p className="text-primary font-medium">Praful Mistry: +91 76000 21664</p>
                    <p className="text-primary font-medium">Deep Mistry: +91 94081 02596</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Visit Us</h3>
                    <p className="text-primary font-medium">Deep Investment Office</p>
                    <p className="text-muted-foreground">Gokuldham Complex</p>
                    <p className="text-muted-foreground">Dahej Bypass Road, Opposite MRF Tyre Showroom</p>
                    <p className="text-muted-foreground">Bharuch, Gujarat 392001</p>
                    <p className="text-sm text-accent font-medium mt-2">(We serve clients across India)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="surface-card bg-white/90 backdrop-blur-sm">
              <h3 className="font-heading font-bold text-2xl text-primary mb-6">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground mb-6">Fill out the form below and our team will respond within 24 business hours.</p>
              
              {/* Status Messages */}
              {submitStatus.type && (
                <div className={`p-4 rounded-lg border mb-6 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center space-x-2">
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                    <p className="font-medium">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-primary font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-primary font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-primary font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Enter your 10-digit mobile number"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-primary font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-[120px]"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 surface-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet us in person at our office in Bharuch
            </p>
          </div>
          
          <div className="surface-card">
            <div className="h-96 bg-surface rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.482490756528!2d72.99041367395645!3d21.72281276358178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0275533f69bcb%3A0x269a5554106b1a19!2sDeep%20Investment!5e0!3m2!1sen!2sin!4v1754471820570!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Deep Investment Office Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-background text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-6">
            Ready to Start Your Wealth Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation to discuss your financial goals and discover how we can help you achieve them.
          </p>
          <Button 
            className="btn-hero text-lg"
            onClick={() => {
              document.querySelector('form')?.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
              });
            }}
          >
            Book Your Free Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;