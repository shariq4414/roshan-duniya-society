export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            हमारे बारे में
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            रोशन दुनिया सोसाइटी महिलाओं के सशक्तिकरण, शिक्षा, कौशल विकास
            एवं सामाजिक उत्थान के लिए समर्पित संस्था है।
          </p>
        </div>
      </section>

      {/* About NGO */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="rounded-3xl bg-white p-10 shadow-md">
            <h2 className="text-3xl font-bold text-slate-900">
              रोशन दुनिया सोसाइटी
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              रोशन दुनिया सोसाइटी एक सामाजिक संस्था है जो महिलाओं के
              सशक्तिकरण, शिक्षा, कौशल विकास, स्वास्थ्य जागरूकता तथा
              समाज के कमजोर वर्गों के उत्थान के लिए निरंतर कार्य कर रही है।
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              संस्था का उद्देश्य लोगों को आत्मनिर्भर बनाना, बेहतर अवसर
              प्रदान करना तथा समाज में सकारात्मक परिवर्तन लाना है।
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          
          <div className="rounded-3xl bg-white p-8 shadow-md">
            <h3 className="text-2xl font-bold text-orange-500">
              हमारा मिशन
            </h3>

            <p className="mt-4 text-slate-700 leading-relaxed">
              महिलाओं, युवाओं एवं जरूरतमंद लोगों को शिक्षा,
              प्रशिक्षण एवं जागरूकता के माध्यम से सशक्त बनाना।
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-md">
            <h3 className="text-2xl font-bold text-orange-500">
              हमारा विजन
            </h3>

            <p className="mt-4 text-slate-700 leading-relaxed">
              एक ऐसे समाज का निर्माण जहाँ प्रत्येक व्यक्ति को
              सम्मान, अवसर एवं आत्मनिर्भर जीवन प्राप्त हो।
            </p>
          </div>

        </div>
      </section>

      {/* Objectives */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <h2 className="text-center text-4xl font-bold text-slate-900">
            हमारे उद्देश्य
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            <div className="rounded-2xl border p-6">
              महिला सशक्तिकरण
            </div>

            <div className="rounded-2xl border p-6">
              शिक्षा एवं प्रशिक्षण
            </div>

            <div className="rounded-2xl border p-6">
              स्वास्थ्य जागरूकता
            </div>

            <div className="rounded-2xl border p-6">
              पर्यावरण संरक्षण
            </div>

            <div className="rounded-2xl border p-6">
              आपदा राहत कार्य
            </div>

            <div className="rounded-2xl border p-6">
              सामाजिक कल्याण
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}