import { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { PlatformLinks } from '../components/platformlinks';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      {/* homepage componets - formal layout */}
      <PlatformLinks />
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: 'general',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#4ebccb]">Get In Touch</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-[#4ebccb]" />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-700">+254712345678</p>
                  <div className="flex items-center mt-1">
                    <span className="text-gray-700">+254 799 987654 </span>
                    <FaWhatsapp className="text-green-500 mr-2" />
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-[#4ebccb]" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-700">
                    <a href="mailto:info@charity.org" className="hover:text-blue-600">info@charity.org</a>
                  </p>
                  <p className="text-gray-700">
                    <a href="mailto:donate@charity.org" className="hover:text-blue-600">donate@charity.org</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-[#4ebccb]" />
                </div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-700">Example House, 4th Floor</p>
                  <p className="text-gray-700">Moi Avenue, Nairobi</p>
                  <p className="text-gray-700">P.O. Box 12345-00100</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <i className={`fab fa-${social} text-gray-700 hover:text-blue-600`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808477395489!2d36.82115931475398!3d-1.288385835980925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6640a1d0b%3A0x9f5a3e711a25b5ea!2sPioneer%20House!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              Thank you! Your message has been submitted. We'll respond within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block font-medium mb-1">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="general">General Inquiry</option>
                <option value="donation">Donation Question</option>
                <option value="volunteer">Volunteer Opportunity</option>
                <option value="partnership">Partnership Inquiry</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <input type="checkbox" id="consent" required className="mr-2" />
              <label htmlFor="consent" className="text-sm text-gray-700">
                I consent to having this website store my submitted information
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4ebccb] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              question: "How can I verify my donation was received?",
              answer: "You'll receive an M-Pesa confirmation message immediately, followed by an email receipt within 24 hours."
            },
            {
              question: "Are donations tax-deductible?",
              answer: "Yes, we provide tax exemption certificates for all donations above KES 1,000."
            },
            {
              question: "How can I volunteer with your organization?",
              answer: "Complete our volunteer form on the 'Get Involved' page or email volunteer@charity.org."
            }
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-lg mb-1">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};