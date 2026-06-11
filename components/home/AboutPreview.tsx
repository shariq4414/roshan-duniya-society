import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <div>
            <Image
              src="/images/hero/hero2.jpg"
              alt="Roshan Duniya Society"
              width={700}
              height={500}
              className="h-[500px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              हमारे बारे में
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              रोशन दुनिया सोसाइटी
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              रोशन दुनिया सोसाइटी महिलाओं के सशक्तिकरण, शिक्षा,
              कौशल विकास, स्वास्थ्य जागरूकता एवं सामाजिक उत्थान के
              लिए कार्यरत एक समर्पित संस्था है।
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              हमारा उद्देश्य समाज के कमजोर एवं जरूरतमंद वर्गों को
              आत्मनिर्भर बनाना, उन्हें बेहतर अवसर प्रदान करना तथा
              शिक्षा, प्रशिक्षण एवं जनकल्याणकारी कार्यक्रमों के माध्यम
              से समाज में सकारात्मक परिवर्तन लाना है।
            </p>

            {/* Mission Points */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-orange-500">✓</span>
                <p>महिला सशक्तिकरण एवं आत्मनिर्भरता</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-orange-500">✓</span>
                <p>शिक्षा एवं कौशल विकास प्रशिक्षण</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-orange-500">✓</span>
                <p>स्वास्थ्य एवं सामाजिक जागरूकता</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-orange-500">✓</span>
                <p>जरूरतमंद परिवारों की सहायता</p>
              </div>
            </div>

            <a
              href="/about"
              className="mt-8 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
            >
              संस्था के बारे में जानें
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}