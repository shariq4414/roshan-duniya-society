import Image from "next/image";

const galleryImages = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg",
  "/images/gallery/gallery8.jpg",
  "/images/gallery/gallery9.jpg",
  "/images/gallery/gallery10.jpg",
  "/images/gallery/gallery11.jpg",
  "/images/gallery/gallery12.jpg",
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            फोटो गैलरी
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            रोशन दुनिया सोसाइटी द्वारा आयोजित कार्यक्रमों, प्रशिक्षणों
            एवं सामाजिक गतिविधियों की झलकियाँ।
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  width={600}
                  height={450}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}