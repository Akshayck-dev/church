import React, { useState } from 'react';

export const ContactScreen: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-12 max-w-[1280px] mx-auto min-h-screen">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="font-display-lg text-4xl sm:text-5xl text-[#071e28]">Contact Us</h1>
          <p className="text-lg text-[#3e484d]">
            We would love to hear from you. Reach out with any questions, prayer requests, or inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#e8f6ff] space-y-6">
            <h2 className="text-xl font-display-md text-[#006780]">Get in Touch</h2>
            
            <div className="space-y-4 text-[#3e484d]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006780]">location_on</span>
                <p>
                  Lourde Matha Church<br/>
                  Thalayanadu
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#006780]">phone</span>
                <p>+91 (Contact Number)</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#006780]">mail</span>
                <p>info@lourdemathathalayanadu.org</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#e8f6ff]">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#006780]">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
                <h3 className="font-display-md text-xl">Message Sent</h3>
                <p className="text-sm text-[#3e484d]">Thank you for reaching out. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#071e28] mb-1">Name</label>
                  <input required type="text" className="w-full px-4 py-2 rounded-xl border border-[#dbf1ff] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] transition-shadow" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#071e28] mb-1">Email</label>
                  <input required type="email" className="w-full px-4 py-2 rounded-xl border border-[#dbf1ff] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] transition-shadow" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#071e28] mb-1">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-2 rounded-xl border border-[#dbf1ff] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] transition-shadow resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-[#006780] hover:bg-[#005266] text-white rounded-xl font-semibold transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
