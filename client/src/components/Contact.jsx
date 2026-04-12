import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
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
        setForm({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus({ loading: false, success: '', error: data.message });
      }
    } catch {
      setStatus({ loading: false, success: '', error: 'Could not connect to server. Please try again.' });
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg text-sm font-mono bg-primary border border-body/20 text-heading placeholder:text-body/50 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none';

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden bg-primary/5">
      <div className="relative z-10 mx-auto max-w-3xl w-full flex flex-col">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-12 animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl font-black text-heading">
            Contact
          </h1>
          <div className="h-px bg-body/20 flex-grow ml-4"></div>
        </div>

        <p className="text-body text-sm md:text-base mb-10 animate-fade-up" style={{ animationDelay: '100ms' }}>
          Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-primary rounded-xl p-6 sm:p-8 border border-body/10 shadow-sm animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          <div className="grid grid-cols-1 mb-4">
            <input
              type="text" name="firstName" placeholder="Name"
              value={form.firstName} onChange={handleChange}
              className={inputClass} required
            />
          </div>

          <input
            type="email" name="email" placeholder="Email Address"
            value={form.email} onChange={handleChange}
            className={`${inputClass} mb-4`} required
          />

          <textarea
            name="message" rows="5" placeholder="Your Message"
            value={form.message} onChange={handleChange}
            className={`${inputClass} mb-4 resize-none`} required
          />

          {status.success && (
            <div className="mb-4 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-mono">
              {status.success}
            </div>
          )}
          {status.error && (
            <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono">
              {status.error}
            </div>
          )}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-3 font-mono font-semibold text-sm text-primary bg-accent rounded-lg hover:bg-accent-hover hover:shadow-md transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

