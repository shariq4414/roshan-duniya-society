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
    icon: <FaHandsHelping size={28} />,
    title: "महिला सशक्तिकरण",
    description:
      "महिलाओं को आत्मनिर्भर एवं सशक्त बनाने हेतु विभिन्न कार्यक्रम एवं प्रशिक्षण।",
  },
  {
    icon: <FaGraduationCap size={28} />,
    title: "शिक्षा एवं प्रशिक्षण",
    description:
      "शिक्षा, सिलाई, कढ़ाई, बुनाई एवं कौशल विकास प्रशिक्षण कार्यक्रम।",
  },
  {
    icon: <FaHeartbeat size={28} />,
    title: "स्वास्थ्य जागरूकता",
    description:
      "स्वास्थ्य शिविर एवं स्वास्थ्य संबंधी जागरूकता अभियान।",
  },
  {
    icon: <FaLeaf size={28} />,
    title: "पर्यावरण संरक्षण",
    description:
      "वृक्षारोपण एवं पर्यावरण संरक्षण संबंधी कार्यक्रम।",
  },
  {
    icon: <FaPeopleCarry size={28} />,
    title: "आपदा राहत कार्य",
    description:
      "आपदा प्रभावित लोगों को सहायता एवं राहत सामग्री उपलब्ध कराना।",
  },
  {
    icon: <FaUsers size={28} />,
    title: "सामाजिक कल्याण",
    description:
      "गरीब एवं जरूरतमंद लोगों के लिए सामाजिक सहायता एवं सहयोग।",
  },
];

export default function Activities() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="container-custom">

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            हमारी गतिविधियाँ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            समाज सेवा के प्रमुख क्षेत्र
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            रोशन दुनिया सोसाइटी समाज के विभिन्न क्षेत्रों में जनकल्याण,
            शिक्षा, स्वास्थ्य एवं महिला सशक्तिकरण के लिए निरंतर कार्य कर रही है।
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                {activity.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {activity.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {activity.description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-orange-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}