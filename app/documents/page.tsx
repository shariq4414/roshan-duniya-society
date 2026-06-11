import {
  FaFilePdf,
  FaCertificate,
  FaIdCard,
} from "react-icons/fa";

const documents = [
  {
    title: "Registration Certificate",
    icon: <FaCertificate size={28} />,
    status: "Coming Soon",
  },
  {
    title: "PAN Certificate",
    icon: <FaIdCard size={28} />,
    status: "Coming Soon",
  },
  {
    title: "80G Certificate",
    icon: <FaFilePdf size={28} />,
    status: "Coming Soon",
  },
  {
    title: "12A Certificate",
    icon: <FaFilePdf size={28} />,
    status: "Coming Soon",
  },
  {
    title: "Annual Report",
    icon: <FaFilePdf size={28} />,
    status: "Coming Soon",
  },
  {
    title: "Organization Profile",
    icon: <FaFilePdf size={28} />,
    status: "Coming Soon",
  },
];

export default function DocumentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Transparency & Trust
          </span>

          <h1 className="mt-5 text-5xl font-bold text-slate-900 md:text-6xl">
            दस्तावेज़
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            संस्था से संबंधित महत्वपूर्ण दस्तावेज़ एवं प्रमाणपत्र।
            पारदर्शिता और विश्वास हमारी प्राथमिकता है।
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="bg-white py-24">
        <div className="container-custom">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                  {doc.icon}
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {doc.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {doc.status}
                </p>

                <button
                  disabled
                  className="
                    mt-6
                    rounded-xl
                    bg-slate-200
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-slate-500
                    cursor-not-allowed
                  "
                >
                  Available Soon
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}