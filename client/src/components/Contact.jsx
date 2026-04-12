import { useState } from 'react';
import { Mail, MapPin, Send, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: '', error: '' });
    try {
      const res = await fetch('https://portfolio-chv3.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ loading: false, success: data.message, error: '' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ loading: false, success: '', error: data.message });
      }
    } catch {
      setStatus({ loading: false, success: '', error: 'Could not connect to server. Please try again.' });
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg text-sm font-mono bg-card border border-body/20 text-heading focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  const labelClass = 'block text-xs font-mono text-body mb-2 uppercase tracking-wider';

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden bg-primary/5">
      <div className="relative z-10 mx-auto max-w-6xl w-full">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-5 animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl font-black text-heading">
            Get In Touch
          </h1>
          <div className="h-px bg-body/20 flex-grow ml-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT COLUMN*/}
          <div className="space-y-5 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-heading mb-4 leading-tight">
                Let's talk about your next project.
              </h3>
              <p className="text-body text-base leading-relaxed">
                I'm currently seeking a software engineering internship and open to new opportunities.
                Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-6">

              <a href="mailto:prakhar.agrawal@email.com" className="flex items-center gap-4 text-body hover:text-accent transition-colors group w-fit">
                <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors shadow-sm">
                  <Mail size={20} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-body/70 uppercase tracking-wider mb-0.5">Email</span>
                  <span className="font-mono text-sm break-all text-heading font-medium">prakhar.agrawal@email.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-body w-fit">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-body/70 uppercase tracking-wider mb-0.5">Location</span>
                  <span className="font-mono text-sm text-heading font-medium">Jaipur, Rajasthan, India</span>
                </div>
              </div>

            </div>
            <div className="pt-2">
              <h4 className="text-xs font-mono text-body/70 uppercase tracking-wider mb-4">Connect Professionally</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/prakharAg01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-body/10 flex items-center justify-center text-body hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 shadow-sm"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-body/10 flex items-center justify-center text-body hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-6 sm:p-8 border border-body/10 shadow-sm animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            <div className="mb-2">
              <label htmlFor="name" className={labelClass}>Full Name</label>
              <input
                id="name" type="text" name="name"
                value={form.name} onChange={handleChange}
                disabled={status.loading} required maxLength={100}
                className={inputClass}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className={labelClass}>Email Address</label>
              <input
                id="email" type="email" name="email"
                value={form.email} onChange={handleChange}
                disabled={status.loading} required maxLength={150}
                className={inputClass}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="message" className={labelClass}>Your Message</label>
              <textarea
                id="message" name="message" rows="5"
                value={form.message} onChange={handleChange}
                disabled={status.loading} required maxLength={1000}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Status Messages */}
            {status.success && (
              <div className="mb-6 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-mono flex items-start gap-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                <span>{status.success}</span>
              </div>
            )}
            {status.error && (
              <div className="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono flex items-start gap-3">
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                <span>{status.error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-4 flex items-center justify-center gap-2 font-mono font-bold text-sm text-primary bg-accent rounded-lg hover:bg-accent/90 hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status.loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}