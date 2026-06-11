import Image from "next/image";

const galleryImages = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container-custom">

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            फोटो गैलरी
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            हमारी गतिविधियों की झलक
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            रोशन दुनिया सोसाइटी द्वारा संचालित विभिन्न कार्यक्रमों,
            प्रशिक्षणों एवं सामाजिक गतिविधियों की कुछ विशेष झलकियाँ।
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={450}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/gallery"
            className="inline-flex rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            पूरी गैलरी देखें
          </a>
        </div>
      </div>
    </section>
  );
}