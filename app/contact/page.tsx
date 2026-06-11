"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("आपका संदेश सफलतापूर्वक भेज दिया गया है।");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSuccess("कुछ समस्या हुई। कृपया पुनः प्रयास करें।");
      }
    } catch (error) {
      console.error(error);
      setSuccess("कुछ समस्या हुई। कृपया पुनः प्रयास करें।");
    }

    setLoading(false);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-slate-900 md:text-6xl">
            संपर्क करें
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            किसी भी जानकारी, सहयोग या प्रश्न के लिए हमसे संपर्क करें।
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          
          {/* Contact Info */}
          <div>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Contact Information
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              हमसे जुड़ें
            </h2>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h4 className="font-semibold">फोन</h4>
                <p className="mt-2">+91 XXXXX XXXXX</p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h4 className="font-semibold">ईमेल</h4>
                <p className="mt-2">hello.printeda@gmail.com</p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h4 className="font-semibold">पता</h4>
                <p className="mt-2">
                  Roshan Duniya Society, India
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold">
              संदेश भेजें
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="आपका नाम"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ईमेल"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-orange-500"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="मोबाइल नंबर"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-orange-500"
              />

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="अपना संदेश लिखें"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-orange-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-50"
              >
                {loading ? "भेजा जा रहा है..." : "संदेश भेजें"}
              </button>

              {success && (
                <p className="text-center text-green-600 font-medium">
                  {success}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <iframe
              src="YOUR_GOOGLE_MAP_EMBED_LINK"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}