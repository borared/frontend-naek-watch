import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RedeemCheckout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { item, userPoints } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.address) {
      alert("Please fill all required fields.");
      return;
    }

    // Here you would send to backend API

    alert("Order submitted successfully! 🎉");

    navigate("/store");
  };

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        No item selected.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      
      <div className="w-full max-w-xl bg-neutral-900 p-8 rounded-2xl border border-white/10 shadow-xl">
        
        <h1 className="text-3xl font-bold text-red-600 mb-6">
          Redeem Item
        </h1>

        {/* Item Info */}
        <div className="mb-6 border border-white/10 rounded-lg p-4">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-yellow-400 font-bold mt-2">
            {item.points} PTS
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm mb-1">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone Number *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Address *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full bg-neutral-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition-all"
          >
            Confirm Redeem
          </button>
        </form>
      </div>
    </div>
  );
}
