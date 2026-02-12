import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Signup = () => {
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

                    <div className="mb-4">
                        <p className="text-xs text-gray-800 mb-1 font-semibold">- ពាក្យសម្ងាត់</p>
                        <input
                            type="password"
                            placeholder="ពាក្យសម្ងាត់"
                            className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white text-sm"
                        />
                    </div>

                    <div className="mb-6">
                        <p className="text-xs text-gray-800 mb-1 font-semibold">- បញ្ជាក់ពាក្យសម្ងាត់</p>
                        <input
                            type="password"
                            placeholder="បញ្ជាក់ពាក្យសម្ងាត់"
                            className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white text-sm"
                        />
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
                    <button className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-sm transition duration-150 text-base flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                            </g>
                        </svg>
                        Sign Up with Google
                    </button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Signup