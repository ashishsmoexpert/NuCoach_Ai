import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { AnimatedSection, ContactForm } from '../components/UI';

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-wide relative pt-32 pb-20 md:pt-40 md:pb-28">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              We'd love to hear from you
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Form */}
            <AnimatedSection>
              <div className="bg-navy-50 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-navy-900 mb-2">Send us a message</h2>
                <p className="text-navy-600 mb-8">Fill out the form below and we'll get back to you within one business day.</p>
                <ContactForm formType="contact" />
              </div>
            </AnimatedSection>

            {/* Right: Contact Details + Map */}
            <AnimatedSection delay={100}>
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="card">
                  <h3 className="text-xl font-bold text-navy-900 mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-600 uppercase tracking-wide">Email</p>
                        <a href="mailto:hello@nucoach.ai" className="text-navy-900 font-medium hover:text-accent-600 transition-colors">
                          hello@nucoach.ai
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-600 uppercase tracking-wide">Location</p>
                        <p className="text-navy-900 font-medium">NuVeda Learning Pvt. Ltd.</p>
                        <p className="text-navy-600">Bangalore, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="card">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/company/nucoach"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center text-navy-600 hover:bg-accent-100 hover:text-accent-600 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="https://twitter.com/nucoach"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center text-navy-600 hover:bg-accent-100 hover:text-accent-600 transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-64 rounded-2xl bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
                  Map Placeholder
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
