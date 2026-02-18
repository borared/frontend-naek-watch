import React from "react";

const products = [
  {
    id: 1,
    name: "Anime Hoodie",
    image:
      "https://i.ebayimg.com/images/g/Fa8AAOSw5aJmECZS/s-l1200.png",
    points: 1200,
  },
  {
    id: 2,
    name: "Limited Edition Keychain Superman",
    image:
      "https://www.wearefanattik.com/cdn/shop/files/Z-DC88-Lifestyle-1.jpg?v=1750156973&width=1445",
    points: 400,
  },
  {
    id: 3,
    name: "NaekWatch Premium Cap",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1771428230/Gemini_Generated_Image_cq83o1cq83o1cq83_eot4q9.png",
    points: 800,
  },
  {
    id: 4,
    name: "Exclusive Movie Poster",
    image:
      "https://ih1.redbubble.net/image.5427513841.9955/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    points: 600,
  },
  {
    id: 5,
    name: "Limited Metal Bottle",
    image:
      "https://www.mijo-brand.de/app/uploads/2023/11/Metalbottle-1.jpg",
    points: 1200,
  },
  {
    id: 6,
    name: "Limited Edition Funko Pop Dr.Doom",
    image:
      "https://sw6.elbenwald.de/media/4e/06/2f/1751410139/E1086561_1.jpg",
    points: 1500,
  },
];

export default function Store() {
  return (
    <div className="min-h-screen bg-black text-white pt-10 px-8">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-red-600 tracking-tight">
          NaekWatch Store
        </h1>
        <p className="text-gray-400 mt-3 text-lg font-Kantumruy">
          ប្តូរពិន្ទុរបស់អ្នកសម្រាប់របស់ពិសេស 🎁
        </p>
      </div>

      {/* Points Display */}
      <div className="mb-12 flex justify-between items-center bg-neutral-900 p-6 rounded-xl border border-white/10">
        <div>
          <h2 className="text-[25px] font-bold​ font-Kantumruy">ពិន្ទុរបស់អ្នក</h2>
          <p className="text-gray-400 text-sm">
            Earn more points by doing tasks
          </p>
        </div>
        <div className="text-3xl font-bold text-yellow-400">
          2,350 PTS
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-red-600 transition-all duration-300 group"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold">
                {item.name}
              </h3>

              <div className="flex justify-between items-center">
                <span className="text-yellow-400 font-bold">
                  {item.points} PTS
                </span>

                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:cursor-pointer">
                  Redeem
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
}
