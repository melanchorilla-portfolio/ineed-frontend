import { FaArrowRight } from "react-icons/fa6";

const Auth = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-16 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-sky-900">indeed</h1>
      </div>

      {/* Sign Up Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm max-w-md w-full">
        <h1 className="text-xl font-bold text-gray-800 mb-4">
          Ready to take the next step?
        </h1>
        <p className="text-gray-600 mb-6">Create an account or sign in.</p>

        {/* Terms Text */}
        <p className="text-sm text-gray-600 mb-6">
          By creating an account or signing in, you understand and agree to
          Indeed's{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms
          </a>
          . You also acknowledge our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Cookie
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy
          </a>{" "}
          policies. You will receive marketing messages from Indeed and may opt
          out at any time by following the unsubscribe link in our messages, or
          as detailed in our terms.
        </p>

        {/* Google Button */}
        <button className="w-full mb-3 flex items-center justify-center gap-3 border rounded-md py-2.5 hover:bg-gray-50 transition-colors">
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Apple Button */}
        <button className="w-full mb-6 flex items-center justify-center gap-3 border rounded-md py-2.5 hover:bg-gray-50 transition-colors">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="black">
            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.07-.5-2.04-.48-3.16 0-1.4.62-2.14.53-3.02-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.6 3.43 1.51-3.04 1.97-2.35 5.96.91 7.35-.7 1.82-1.67 3.49-2.93 4.17zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.27 2.38-1.68 4.2-3.74 4.25z" />
          </svg>
          Continue with Apple
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          Continue
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Auth;
