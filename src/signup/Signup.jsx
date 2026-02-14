import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FcGoogle } from 'react-icons/fc';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <Navbar />
            <h1 className="text-3xl font-bold text-gray-800 mb-1 flex justify-center mt-5">បង្កើតគណនី</h1>
            <div className="border-b border-gray-300 pb-4 mb-4 ">
                <h2 className="text-lg font-semibold text-gray-700 flex justify-center">NEAKWATCH REWARDS</h2>
                <p className='text-sm text-gray-600 flex justify-center'>Join NaekWatch Rewards to earn points for special gift, a birthday Reward and more.</p>
                <p className="text-sm text-gray-600 flex justify-center">បង្កើតគណនី NaekWatch ដើម្បីទទួលបានពិន្ទុក្នុងការចាប់រង្វាន់ពិសេសៗ រួមទាំងរង្វាន់សម្រាប់ថ្ងៃខួបកំណើត និងរង្វាន់ផ្សេងៗទៀត</p>
            </div>
            <main className="min-h-screen bg-gray-50 py-8 px-4 flex justify-center font-sans">
                <div className="max-w-2xl w-full bg-white shadow-md border border-gray-200 p-6 md:p-8">
                    <p className="text-sm text-gray-600 mb-4">* indicates required field</p>

                    {/* Form fields - all Khmer labels exactly as in the spec */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-800 mb-1">
                            ព័ត៌មានផ្ទាល់ខ្លួន
                        </label>
                        <input
                            type="text"
                            placeholder="នាមត្រកូល"
                            className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="នាមខ្លួន"
                            className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-xs text-gray-800 mb-1 font-semibold">- អ៊ីមែល ឬ លេខទូរស័ព្ទ</p>
                        <input
                            type="text"
                            placeholder="អ៊ីមែល ឬ លេខទូរស័ព្ទ"
                            className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white text-sm"
                        />
                    </div>

                    {/* Password Input with Show/Hide */}
                    <div className="mb-4">
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

                    {/* Confirm Password Input with Show/Hide */}
                    <div className="mb-6">
                        <p className="text-xs text-gray-800 mb-1 font-semibold">- បញ្ជាក់ពាក្យសម្ងាត់</p>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="បញ្ជាក់ពាក្យសម្ងាត់"
                                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white text-sm pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800"
                            >
                                {showConfirmPassword ? (
                                    <HiEyeOff className="h-5 w-5" />
                                ) : (
                                    <HiEye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Password creation hint — exactly as described */}
                    <div className="bg-gray-100 border-gray-600 p-4 mb-5 text-sm text-gray-800">
                        <p>
                            Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character or symbol like an exclamation point or asterisk.
                        </p>
                    </div>

                    {/* Checkbox + Terms (exact wording from image) */}
                    <div className="flex items-start mb-6">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mt-1 mr-3 h-4 w-4 rounded-sm border-gray-300 text-gray-800 focus:ring-gray-400"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-700 leading-tight">
                            I agree to the NaekWatch Reward Terms and Terms of Service and our Privacy Policy
                        </label>
                    </div>

                    {/* Sign Up button */}
                    <button className="w-full bg-black hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-sm transition duration-150 text-base tracking-wide mb-4">
                        Sign Up
                    </button>

                    {/* OR separator */}
                    <div className="relative flex items-center justify-center my-4">
                        <div className="border-t border-gray-300 absolute w-full"></div>
                        <span className="bg-white px-4 text-sm text-gray-500 relative">OR</span>
                    </div>

                    {/* Sign Up with Google */}
                    <button className="w-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-sm transition text-base flex items-center justify-center">
                        <FcGoogle className="w-5 h-5 mr-2" />
                        Sign Up with Google
                    </button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Signup;