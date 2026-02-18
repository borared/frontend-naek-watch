import React from "react";
import products from "../data/products"

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
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-gray-400 transition-all duration-300 group"
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
