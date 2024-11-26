import React from "react";
import Layout from "../layouts/Layout";

const Conversations = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex h-screen bg-gray-100">
          {/* Left Sidebar */}
          <div className="w-1/4 bg-white border">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">Messages</h2>
              <div className="flex items-center text-green-600 mt-2">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                <span>Online status: On</span>
              </div>
            </div>
            <div className="p-4">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Inbox</option>
              </select>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 p-6">
            <div className="flex items-start mb-6 justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm flex-1 max-w-3xl">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Welcome to Messages
                </h1>
                <p className="text-gray-600">
                  When an employer contacts you, you will see messages here.
                </p>
                <div className="mt-6 flex justify-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Find jobs
                  </button>
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-gray-50 transition-colors ml-4">
                    Upload your CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Conversations;
