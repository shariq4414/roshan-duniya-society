export default function DonationCTA() {
  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        <div className="rounded-[32px] bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-16 text-center shadow-xl md:px-16 md:py-20">

          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            Support Our Mission
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold text-white md:text-5xl">
            आपका सहयोग किसी के जीवन में
            बड़ा बदलाव ला सकता है
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-orange-100 md:text-lg">
            आपके सहयोग से हम शिक्षा, महिला सशक्तिकरण,
            स्वास्थ्य जागरूकता एवं सामाजिक कल्याण के कार्यों को
            और अधिक लोगों तक पहुँचा सकते हैं।
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="rounded-xl bg-white px-8 py-3 font-semibold text-orange-600 transition hover:shadow-lg"
            >
              अभी दान करें
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-orange-600"
            >
              संपर्क करें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}