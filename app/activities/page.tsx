import {
  FaHandsHelping,
  FaGraduationCap,
  FaHeartbeat,
  FaLeaf,
  FaPeopleCarry,
  FaUsers,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaHandsHelping size={32} />,
    title: "महिला सशक्तिकरण",
    description:
      "महिलाओं को आत्मनिर्भर बनाने, उनके अधिकारों के प्रति जागरूक करने तथा उन्हें आर्थिक एवं सामाजिक रूप से मजबूत बनाने के लिए विभिन्न कार्यक्रम चलाए जाते हैं।",
  },
  {
    icon: <FaGraduationCap size={32} />,
    title: "शिक्षा एवं प्रशिक्षण",
    description:
      "सिलाई, कढ़ाई, बुनाई, कंप्यूटर एवं अन्य कौशल विकास प्रशिक्षण कार्यक्रमों के माध्यम से युवाओं और महिलाओं को रोजगार योग्य बनाया जाता है।",
  },
  {
    icon: <FaHeartbeat size={32} />,
    title: "स्वास्थ्य जागरूकता",
    description:
      "स्वास्थ्य शिविर, महिला स्वास्थ्य जागरूकता कार्यक्रम तथा निःशुल्क चिकित्सा सहायता से लोगों को बेहतर स्वास्थ्य सेवाओं की जानकारी दी जाती है।",
  },
  {
    icon: <FaLeaf size={32} />,
    title: "पर्यावरण संरक्षण",
    description:
      "वृक्षारोपण अभियान, स्वच्छता जागरूकता और पर्यावरण संरक्षण गतिविधियों के माध्यम से समाज में जागरूकता फैलाई जाती है।",
  },
  {
    icon: <FaPeopleCarry size={32} />,
    title: "आपदा राहत कार्य",
    description:
      "प्राकृतिक आपदाओं एवं संकट के समय जरूरतमंद लोगों तक राहत सामग्री और सहायता पहुँचाई जाती है।",
  },
  {
    icon: <FaUsers size={32} />,
    title: "सामाजिक कल्याण",
    description:
      "गरीब, असहाय एवं जरूरतमंद लोगों को सहायता, मार्गदर्शन एवं सामाजिक सहयोग प्रदान किया जाता है।",
  },
];

export default function ActivitiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            हमारी गतिविधियाँ
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            रोशन दुनिया सोसाइटी समाज के विभिन्न क्षेत्रों में जनकल्याण,
            शिक्षा, स्वास्थ्य एवं महिला सशक्तिकरण के लिए निरंतर कार्य कर रही है।
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.title}
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
                <div className="text-orange-500">
                  {activity.icon}
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {activity.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold">
            समाज सेवा में अपना योगदान दें
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
            आपके सहयोग से हम और अधिक लोगों तक सहायता और अवसर पहुँचा सकते हैं।
          </p>

          <a
            href="/donate"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-orange-500"
          >
            दान करें
          </a>
        </div>
      </section>
    </main>
  );
}