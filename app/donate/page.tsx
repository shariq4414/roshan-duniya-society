import Image from "next/image";
import {
  FaCheckCircle,
  FaHandHoldingHeart,
  FaUniversity,
} from "react-icons/fa";

export default function DonatePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Support Our Mission
          </span>

          <h1 className="mt-5 text-5xl font-bold text-slate-900 md:text-6xl">
            दान करें
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            आपका छोटा सा सहयोग किसी के जीवन में बड़ा बदलाव ला सकता है।
            आपका योगदान शिक्षा, महिला सशक्तिकरण और सामाजिक कल्याण
            के कार्यों को आगे बढ़ाने में मदद करता है।
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900">
                आपका सहयोग हमारे लिए महत्वपूर्ण है
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                आपके सहयोग से हम शिक्षा, महिला सशक्तिकरण,
                स्वास्थ्य जागरूकता एवं सामाजिक कल्याण के
                कार्यों को और अधिक लोगों तक पहुँचा सकते हैं।
              </p>

              {/* Impact Points */}
              <div className="mt-8 space-y-4">

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

              {/* Donation Details */}
              <div className="mt-10 rounded-3xl border border-slate-200 p-6 shadow-sm">

                <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                  <FaUniversity className="text-orange-500" />
                  Bank Details
                </h3>

                <div className="mt-6 space-y-4 text-slate-700">

                  <p>
                    <strong>UPI ID:</strong> yourupi@bank
                  </p>

                  <p>
                    <strong>Account Name:</strong> Roshan Duniya Society
                  </p>

                  <p>
                    <strong>Bank Name:</strong> XXXXX Bank
                  </p>

                  <p>
                    <strong>Account Number:</strong> XXXXXXXXXX
                  </p>

                  <p>
                    <strong>IFSC Code:</strong> XXXXXXXX
                  </p>

                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">

                <div className="text-center">
                  <FaHandHoldingHeart className="mx-auto text-5xl text-orange-500" />

                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    Scan & Donate
                  </h3>

                  <p className="mt-2 text-slate-600">
                    QR Code स्कैन करके सीधे योगदान करें।
                  </p>
                </div>

                <div className="mt-6">
                  <Image
                    src="/images/donate/qr-code.jpg"
                    alt="Donation QR Code"
                    width={350}
                    height={350}
                    className="rounded-2xl border border-slate-200"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            पारदर्शिता एवं विश्वास
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            हमारा उद्देश्य आपके योगदान का सर्वोत्तम उपयोग करते हुए
            समाज में सकारात्मक बदलाव लाना है। प्रत्येक सहयोग हमारे
            मिशन को आगे बढ़ाने में महत्वपूर्ण भूमिका निभाता है।
          </p>

        </div>
      </section>
    </main>
  );
}