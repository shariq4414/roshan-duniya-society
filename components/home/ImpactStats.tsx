import {
  FaFemale,
  FaGraduationCap,
  FaHandsHelping,
  FaUsers,
} from "react-icons/fa";

export default function ImpactStats() {
  const stats = [
    {
      icon: <FaFemale size={30} />,
      number: "500+",
      title: "महिलाएँ सशक्त",
    },
    {
      icon: <FaGraduationCap size={30} />,
      number: "50+",
      title: "प्रशिक्षण कार्यक्रम",
    },
    {
      icon: <FaHandsHelping size={30} />,
      number: "1000+",
      title: "लाभार्थी",
    },
    {
      icon: <FaUsers size={30} />,
      number: "100+",
      title: "स्वयंसेवक",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container-custom">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            हमारा प्रभाव
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            समाज में हमारा योगदान
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            रोशन दुनिया सोसाइटी शिक्षा, महिला सशक्तिकरण,
            स्वास्थ्य जागरूकता एवं सामाजिक कल्याण के माध्यम से
            हजारों लोगों के जीवन में सकारात्मक बदलाव ला रही है।
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="
                group
                rounded-3xl
                bg-white
                p-8
                text-center
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                {stat.icon}
              </div>

              <h3 className="mt-5 text-5xl font-bold text-slate-900">
                {stat.number}
              </h3>

              <p className="mt-3 font-semibold text-slate-600">
                {stat.title}
              </p>

              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-orange-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}