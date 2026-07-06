import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useCounter } from '../hooks/useAnimations';

export function AnimatedSection({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function StatCounter({ end, suffix = '', prefix = '', label, duration = 2000 }: { end: number; suffix?: string; prefix?: string; label: string; duration?: number }) {
  const { count, ref } = useCounter(end, duration);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text">
        {prefix}{count}{suffix}
      </div>
      <p className="mt-2 text-sm text-navy-500 font-medium">{label}</p>
    </div>
  );
}

export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-navy-100 rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-navy-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold text-navy-900 pr-4">{item.question}</span>
            <span className={`text-accent-500 text-xl transition-transform duration-200 flex-shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${
            openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <p className="px-6 pb-4 text-navy-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TestimonialCard({ quote, name, role, company }: { quote: string; name: string; role: string; company: string }) {
  return (
    <div className="card relative">
      <div className="absolute top-4 left-6 text-6xl text-accent-200 font-serif leading-none">&ldquo;</div>
      <blockquote className="relative pt-8 text-navy-700 leading-relaxed text-lg italic">
        {quote}
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center text-white font-semibold text-sm">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="font-semibold text-navy-900 text-sm">{name}</p>
          <p className="text-navy-500 text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
}

export function LogoStrip() {
  const logos = ['Ageas Federal', 'Crestcom', 'Deloitte', 'EY', 'KPMG', 'PwC'];
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
      {logos.map((name) => (
        <div key={name} className="text-navy-300 font-semibold text-sm md:text-base tracking-wide uppercase">
          {name}
        </div>
      ))}
    </div>
  );
}

export function ContactForm({ formType = 'demo' }: { formType?: 'demo' | 'pilot' | 'partner' | 'contact' }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">Thank you!</h3>
        <p className="text-navy-600">We'll be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">Full Name</label>
          <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-navy-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900" placeholder="Jane Smith" />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">Work Email</label>
          <input required type="email" className="w-full px-4 py-2.5 rounded-lg border border-navy-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900" placeholder="jane@company.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">Company</label>
          <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-navy-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900" placeholder="Acme Inc." />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">Role</label>
          <select required className="w-full px-4 py-2.5 rounded-lg border border-navy-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900 bg-white">
            <option value="">Select your role</option>
            <option>CHRO / CLO</option>
            <option>CRO / VP Sales</option>
            <option>CXO / Executive</option>
            <option>HR Consultant</option>
            <option>Training Company</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy-700 mb-1.5">Company Size</label>
        <select required className="w-full px-4 py-2.5 rounded-lg border border-navy-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900 bg-white">
          <option value="">Select company size</option>
          <option>1–50</option>
          <option>51–200</option>
          <option>201–1000</option>
          <option>1001–5000</option>
          <option>5000+</option>
        </select>
      </div>
      <button type="submit" className="btn-primary w-full">
        {formType === 'demo' ? 'Book a Demo' : formType === 'pilot' ? 'Apply for Pilot' : formType === 'partner' ? 'Apply to Partner' : 'Send Message'}
      </button>
      <p className="text-xs text-navy-400 text-center">
        By submitting, you agree to our <Link className="underline hover:text-navy-600" to="/privacy">Privacy Policy</Link>. We'll respond within one business day.
      </p>
    </form>
  );
}
