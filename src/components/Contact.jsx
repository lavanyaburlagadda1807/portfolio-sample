import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to reach out for collaborations or just a friendly chat.</p>
        <a href="mailto:email@example.com" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
          Send an Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
