import React, { useState } from "react";
import { MapPin, Phone, Mail, Hammer, Building2, ClipboardList, Ruler, Cpu } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    { name: "Residential Construction", icon: <Hammer size={16} /> },
    { name: "Commercial", icon: <Building2 size={16} /> },
    { name: "Project Management", icon: <ClipboardList size={16} /> },
    { name: "Architecture & Structure", icon: <Ruler size={16} /> },
    { name: "Interior & Smart Room", icon: <Cpu size={16} /> },
  ];

  const branches = [
    {
      name: "NXT Constructions - Regional Office",
      address:
        "Sai Baba Traders, Market Road 5-2, Opp: Nature Care International Crop Science Pvt Ltd, Besides, Bustand, Boath Buzurg, Telangana 504304-Adilabad",
      phone: "+91 94400 13224",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.552489599591!2d78.3188345!3d19.3452158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd273878f859d7d%3A0x8fa2447dd59382a3!2sNXT%20CONSTRUCTIONS!5e0!3m2!1sen!2sin!4v1762509053895!5m2!1sen!2sin",
    },
    {
      name: "NXT Constructions - Operations Wing",
      address:
        "C9HC+Q8V Hyderabad, Telangana.",
      phone: "+91 94400 13224",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.6312438819155!2d78.36823127516587!3d17.42947568346489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI1JzQ2LjEiTiA3OMKwMjInMTQuOSJF!5e0!3m2!1sen!2sin!4v1762509247738!5m2!1sen!2sin" ,
    },
    {
      name: "NXT Constructions -  Office",
      address: "Maruti Nagar Nizamabad, Telangana 503002.",
      phone: "+91 94400 13224",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7558.64055092212!2d78.12029444999999!3d18.694474000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdc4b6ee7ea89b%3A0x811fa557e14a7bcc!2sMaruti%20Nagar%2C%20Nizamabad%2C%20Telangana%20503002!5e0!3m2!1sen!2sin!4v1762509395450!5m2!1sen!2sin",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only numbers and restrict to 10 digits
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, phone: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const { name, email, phone, service, message } = formData;
    const text = `👋 Hello, I am *${name}*\n📧 Email: ${email}\n📞 Phone: ${phone}\n🧱 Service Interested: ${service}\n💬 Message: ${message}`;
    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919440013224?text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Get in Touch with{" "}
          <span className="text-yellow-500">NXT Constructions</span>
        </h1>
        <p className="text-gray-600 text-lg">
          We’d love to hear from you! Visit our branches or send us a WhatsApp message.
        </p>
      </div>

      {/* Contact Info & Form */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="space-y-10 mt-40">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 p-3 rounded-full text-white">
              <Phone />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone Number</h3>
              <p className="text-gray-600">+91 9440013224</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 p-3 rounded-full text-white">
              <Mail />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email Address</h3>
              <p className="text-gray-600">anirudhkathuri@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 p-3 rounded-full text-white">
              <MapPin />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Corporate Office</h3>
              <p className="text-gray-600">
                Adilabad|Hyderabad|Nizamabad-Telangana,
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center border-b pb-3 border-yellow-400">
            Get in Touch
          </h2>
          <form onSubmit={handleWhatsAppSend} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />

            {/* Dropdown for Services */}
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            >
              <option value="">Select a Service</option>
              {services.map((s, i) => (
                <option key={i} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp"></i> Send Message on WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Branch Maps */}
      <div className="space-y-16">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 p-6 rounded-3xl shadow-lg"
          >
            <div>
              <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
                {branch.name}
              </h3>
              <p className="text-gray-700 mb-3">{branch.address}</p>
              <p className="text-gray-600 mb-5">
                📞 <strong>{branch.phone}</strong>
              </p>
              <a
                href={branch.mapSrc.replace("embed?", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                Get Directions
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={branch.mapSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
