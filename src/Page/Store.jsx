import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import { redeemItem } from "../utils/redeem";
import { UserContext } from "../context/UserContext";

export default function Store() {
	const navigate = useNavigate();
	const { userPoints, orders } = useContext(UserContext);

	const [showModal, setShowModal] = useState(false);
	const [modalMessage, setModalMessage] = useState("");
	const [showOrders, setShowOrders] = useState(false);

	const handleRedeem = (item) => {
		const result = redeemItem(userPoints, item.points);

		if (!result.success) {
			setModalMessage(result.message);
			setShowModal(true);
			return;
		}

		navigate("/redeem-checkout", {
			state: {
				item,
			},
		});
	};

	return (
		<div className="min-h-screen bg-black text-white pt-10 px-8 relative">
			{/* Header */}
			<div className="mb-10">
				<h1 className="text-4xl font-bold text-red-600 tracking-tight">
					NaekWatch Store
				</h1>
				<div className="flex justify-between">
          <div class="flex items-center gap-2 mt-3">
            <p class="text-gray-400 text-xl font-Kantumruy">
              ប្តូរពិន្ទុរបស់អ្នកសម្រាប់របស់ពិសេស
            </p>
            <i class="bx bx-gift text-gray-400 text-xl" />
          </div>
          <div>
            {/* Notification Button */}
					<button
						onClick={() => setShowOrders(!showOrders)}
						className="relative bg-red-600 hover:bg-red-800 w-30 h-10 p-3 rounded-[10px] font-semibold transition-all hover:cursor-pointer"
					>
						Order List
						{orders.length > 0 && (
							<span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full">
								{orders.length}
							</span>
						)}
					</button>    
          </div>
        </div>
			</div>

			{/* Points + Notification */}
			<div className="mb-12 flex justify-between items-center bg-neutral-900 p-6 rounded-xl border border-white/10 relative">
				<div>
					<h2 className="text-[25px] font-bold font-Kantumruy">
						ពិន្ទុរបស់អ្នក
					</h2>
					<p className="text-gray-400 text-sm">
						Earn more points by doing tasks
					</p>
				</div>

				<div className="flex items-center gap-6">
					

					{/* Points */}
					<div className="text-3xl font-bold text-yellow-400">
						{userPoints} PTS
					</div>
				</div>
			</div>

			{/* Orders Panel */}
			{showOrders && (
				<div className="mb-12 bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-2xl animate-fadeIn">
					<h2 className="text-2xl font-semibold text-red-500 mb-6">Your Orders</h2>

					{orders.length === 0 ? (
						<p className="text-gray-400">You haven’t redeemed anything yet.</p>
					) : (   
						<div className="space-y-4">
							{orders.map((order) => (
								<div
									key={order.id}
									className="bg-neutral-800 border border-white/5 rounded-xl p-4"
								>
									<div className="flex justify-between">
										<h3 className="font-semibold">{order.item.name}</h3>
										<span className="text-yellow-400 font-bold">
											{order.item.points} PTS
										</span>
									</div>

									<div className="text-gray-400 text-sm mt-2 space-y-1">
										<p>
											<span className="text-white">Name:</span>{" "}
											{order.formData.fullName}
										</p>
										<p>
											<span className="text-white">Address:</span>{" "}
											{order.formData.address}
										</p>
										<p>
											<span className="text-white">Date:</span> {order.date}
										</p>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			)}

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
							<h3 className="text-lg font-semibold">{item.name}</h3>

							<div className="flex justify-between items-center">
								<span className="text-yellow-400 font-bold">
									{item.points} PTS
								</span>

								<button
									onClick={() => handleRedeem(item)}
									className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
								>
									Redeem
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Custom Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
					<div className="bg-neutral-900 border border-white/10 rounded-2xl p-8 w-[350px] text-center shadow-2xl">
						<h2 className="text-2xl font-bold mb-4 text-red-500">
							Not Enough Points
						</h2>
						<p className="text-gray-300 mb-6">{modalMessage}</p>
						<button
							onClick={() => setShowModal(false)}
							className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-all"
						>
							Close
						</button>
					</div>
				</div>
			)}

			<div className="h-20"></div>
		</div>
	);
}
