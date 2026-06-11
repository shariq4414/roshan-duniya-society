"use client";

import { useState } from "react";

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    interest: "",
    about: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(
          "आपका स्वयंसेवक आवेदन सफलतापूर्वक भेज दिया गया है।"
        );

        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          interest: "",
          about: "",
        });
      } else {
        setSuccess(
          "कुछ समस्या हुई। कृपया पुनः प्रयास करें।"
        );
      }
    } catch (error) {
      console.error(error);

      setSuccess(
        "कुछ समस्या हुई। कृपया पुनः प्रयास करें।"
      );
    }

    setLoading(false);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-slate-900 md:text-6xl">
            स्वयंसेवक बनें
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            समाज सेवा के हमारे मिशन में शामिल होकर
            सकारात्मक बदलाव का हिस्सा बनें।
          </p>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="bg-white py-24">
        <div className="container-custom max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Volunteer Registration
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900">
              स्वयंसेवक आवेदन फॉर्म
            </h2>

            <p className="mt-3 text-slate-600">
              कृपया नीचे दी गई जानकारी भरें।
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="पूरा नाम"
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
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="शहर"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-orange-500"
              />

              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-orange-500"
              >
                <option value="">
                  रुचि का क्षेत्र चुनें
                </option>

                <option value="महिला सशक्तिकरण">
                  महिला सशक्तिकरण
                </option>

                <option value="शिक्षा">
                  शिक्षा
                </option>

                <option value="स्वास्थ्य जागरूकता">
                  स्वास्थ्य जागरूकता
                </option>

                <option value="पर्यावरण संरक्षण">
                  पर्यावरण संरक्षण
                </option>

                <option value="सामाजिक सेवा">
                  सामाजिक सेवा
                </option>
              </select>

              <textarea
                rows={5}
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="अपने बारे में लिखें"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-orange-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-50"
              >
                {loading
                  ? "भेजा जा रहा है..."
                  : "आवेदन भेजें"}
              </button>

              {success && (
                <p className="text-center font-medium text-green-600">
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}