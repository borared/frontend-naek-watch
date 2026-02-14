import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FcGoogle } from 'react-icons/fc';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Navbar />
            <h1 className="text-3xl font-bold text-gray-800 mb-1 flex justify-center mt-5">ចូលគណនី</h1>
            <div className="border-b border-gray-300 pb-4 mb-4">
                <h2 className="text-lg font-semibold text-gray-700 flex justify-center">NEAKWATCH REWARDS</h2>
                <p className='text-sm text-gray-600 flex justify-center'>Join NaekWatch Rewards to earn points for special gift, a birthday Reward and more.</p>
                <p className="text-sm text-gray-600 flex justify-center">ចូលគណនី NaekWatch ដើម្បីទទួលបានពិន្ទុក្នុងការចាប់រង្វាន់ពិសេសៗ រួមទាំងរង្វាន់សម្រាប់ថ្ងៃខួបកំណើត និងរង្វាន់ផ្សេងៗទៀត</p>
            </div>

            <main className="min-h-screen bg-gray-50 py-8 px-4 flex justify-center font-sans">
                <div className="max-w-2xl w-full bg-white shadow-md border border-gray-200 p-6 md:p-8">
                    <p className="text-sm text-gray-600 mb-4">* indicates required field</p>

                    {/* Email or Phone Input */}
                    <div className="mb-4">
                        <p className="text-xs text-gray-800 mb-1 font-semibold">- អ៊ីមែល ឬ លេខទូរស័ព្ទ</p>
                        <input
                            type="text"
                            placeholder="អ៊ីមែល ឬ លេខទូរស័ព្ទ"
                            className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white text-sm"
                        />
                    </div>

                    {/* Password Input with Show/Hide */}
                    <div className="mb-2">
                        <p className="text-xs text-gray-800 mb-1 font-semibold">- ពាក្យសម្ងាត់</p>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="ពាក្យសម្ងាត់"
                                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white text-sm pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800"
                            >
                                {showPassword ? (
                                    <HiEyeOff className="h-5 w-5" />
                                ) : (
                                    <HiEye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="text-right mb-6">
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">
                            ភ្លេចពាក្យសម្ងាត់?
                        </a>
                    </div>

                    {/* Sign In button */}
                    <button className="w-full bg-black hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-sm transition duration-150 text-base tracking-wide mb-4">
                        Sign In
                    </button>

                    {/* OR separator */}
                    <div className="relative flex items-center justify-center my-4">
                        <div className="border-t border-gray-300 absolute w-full"></div>
                        <span className="bg-white px-4 text-sm text-gray-500 relative">OR</span>
                    </div>

                    {/* Sign In with Google */}
                    <button className="w-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-sm transition text-base flex items-center justify-center mb-6">
                        <FcGoogle className="w-5 h-5 mr-2" />
                        Sign In with Google
                    </button>

                    {/* Create Account Link */}
                    <div className="text-center text-sm text-gray-600">
                        <span>Don't have an account? </span>
                        <a href="/signup" className="text-gray-800 font-semibold hover:underline">
                            បង្កើតគណនី
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Signin;