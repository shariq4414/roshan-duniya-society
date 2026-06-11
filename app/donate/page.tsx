import Image from "next/image";
import {
  FaCheckCircle,
  FaHandHoldingHeart,
  FaUniversity,
  FaShieldAlt,
} from "react-icons/fa";

export default function DonatePage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 via-white to-white py-32 md:py-40">
        <div className="container-custom text-center">

          <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Support Our Mission
          </span>

          <h1 className="mt-8 text-6xl font-bold text-slate-900 md:text-8xl">
            दान करें
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-slate-600 md:text-xl">
            आपका छोटा सा सहयोग किसी के जीवन में बड़ा बदलाव ला सकता है।
            आपका योगदान शिक्षा, महिला सशक्तिकरण, स्वास्थ्य जागरूकता
            एवं सामाजिक कल्याण के कार्यों को आगे बढ़ाने में मदद करता है।
          </p>

        </div>
      </section>

      {/* Main Donation Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-custom">

          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Left Content */}
            <div>

              <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
                आपका सहयोग हमारे लिए महत्वपूर्ण है
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                आपके सहयोग से हम शिक्षा, महिला सशक्तिकरण,
                स्वास्थ्य जागरूकता एवं सामाजिक कल्याण के
                कार्यों को और अधिक लोगों तक पहुँचा सकते हैं।
              </p>

              {/* Impact List */}
              <div className="mt-10 space-y-5">

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 text-orange-500" />
                  <p>महिलाओं के कौशल विकास कार्यक्रमों को सहायता</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 text-orange-500" />
                  <p>शिक्षा एवं प्रशिक्षण कार्यक्रमों का विस्तार</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 text-orange-500" />
                  <p>जरूरतमंद परिवारों तक सहायता पहुँचाना</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 text-orange-500" />
                  <p>स्वास्थ्य एवं जागरूकता अभियानों को समर्थन</p>
                </div>

              </div>

              {/* Bank Details */}
              <div className="mt-12 rounded-3xl border border-orange-200 bg-orange-50 p-8 md:p-10 shadow-md">

                <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                  <FaUniversity className="text-orange-500" />
                  Bank Details
                </h3>

                <div className="mt-8 grid gap-6">

                  <div>
                    <p className="text-sm text-slate-500">
                      UPI ID
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      yourupi@bank
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Account Name
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      Roshan Duniya Society
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Bank Name
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      XXXXX Bank
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Account Number
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      XXXXXXXXXX
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      IFSC Code
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      XXXXXXXX
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Side QR */}
            <div className="flex justify-center lg:justify-end">

              <div className="w-full max-w-md rounded-[32px] border border-orange-200 bg-white p-8 shadow-xl">

                <div className="text-center">

                  <FaHandHoldingHeart className="mx-auto text-5xl text-orange-500" />

                  <h3 className="mt-5 text-3xl font-bold text-slate-900">
                    Scan & Donate
                  </h3>

                  <p className="mt-3 text-slate-600">
                    QR Code स्कैन करके सीधे योगदान करें।
                  </p>

                </div>

                <div className="mt-8 flex justify-center">

                  <Image
                    src="/images/donate/qr-code.jpg"
                    alt="Donation QR Code"
                    width={280}
                    height={280}
                    className="rounded-2xl border border-slate-200"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-50 py-24 md:py-28">

        <div className="container-custom">

          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

            <FaShieldAlt className="text-6xl text-orange-500" />

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              पारदर्शिता एवं विश्वास
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              हमारा उद्देश्य आपके योगदान का सर्वोत्तम उपयोग करते हुए
              समाज में सकारात्मक बदलाव लाना है। प्रत्येक सहयोग
              हमारे मिशन को आगे बढ़ाने में महत्वपूर्ण भूमिका निभाता है।
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}