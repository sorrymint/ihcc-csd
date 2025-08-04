"use client";

import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    // Placeholder Google login handler (replace with real OAuth logic)
    const handleGoogleLogin = () => {
        // Example with NextAuth.js you might call signIn('google')
        alert("Google login flow would start here!");
        // router.push('/dashboard'); // redirect after login
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <form className="bg-gray-200 shadow-lg rounded-2xl px-10 py-12 w-full max-w-sm h-[500px] flex flex-col justify-between">
                <div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username <span className="text-red-500">*</span>
                        </label>
                        <input
                            required
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                            id="username"
                            type="text"
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            required
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                            id="password"
                            type="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="mb-4 text-right">
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="mr-2 h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                        />
                        <label htmlFor="remember" className="text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>
                </div>

                {/* Google Login Button */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center bg-white rounded-lg py-2 mb-4 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <svg
                        className="w-6 h-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 533.5 544.3"
                    >
                        <path
                            fill="#4285f4"
                            d="M533.5 278.4c0-17.6-1.4-34.5-4.1-50.9H272v96.4h146.9c-6.3 34.1-25 63-53.4 82.5v68h86.4c50.4-46.5 79.6-114.7 79.6-195.9z"
                        />
                        <path
                            fill="#34a853"
                            d="M272 544.3c72.7 0 133.8-24.1 178.5-65.3l-86.4-68c-24 16.1-54.6 25.7-92 25.7-70.7 0-130.7-47.7-152.3-111.9H31.6v70.5c44.6 87.7 136 149.9 240.4 149.9z"
                        />
                        <path
                            fill="#fbbc04"
                            d="M119.7 324.8c-10.4-31-10.4-64.5 0-95.5v-70.5H31.6c-38.9 76.7-38.9 168.1 0 244.8l88.1-78.8z"
                        />
                        <path
                            fill="#ea4335"
                            d="M272 107.7c38.3 0 72.7 13.2 99.8 39.1l74.8-74.8C402.7 24.1 341.6 0 272 0 167.7 0 76.3 62.2 31.6 149.9l88.1 70.5c21.6-64.2 81.6-111.9 152.3-111.9z"
                        />
                    </svg>
                    Sign in with Google
                </button>

                <div className="flex items-center justify-center">
                    <button
                        className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}




