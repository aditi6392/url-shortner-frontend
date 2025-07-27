import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:py-10 py-8">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 italic mb-6">
          About Linklytics
        </h1>

        {/* Paragraph */}
        <p className="text-gray-700 text-base mb-12 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          Linklytics simplifies URL shortening for efficient sharing. Easily 
          generate, manage, and track your shortened links. Linklytics simplifies 
          URL shortening for efficient sharing. Easily URL shortening for efficient
          sharing. Linklytics simplifies URL shortening for efficient sharing. 
          Easily generate, manage, and track your shortened for efficient sharing.
          Easily generate, manage and track your shortened links.
        </p>

        {/* Features */}
        <div className="space-y-12 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          {/* Feature 1 */}
          <div className="flex items-start gap-5">
            <FaLink className="text-blue-500 text-3xl mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Simple URL Shortening
              </h2>
              <p className="text-gray-600">
                Experience the ease of creating short, memorable URLs in 
                just a few clicks. Our intuitive interface and quick setup
                process ensure you can start sharing links without any hassle.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-5">
            <FaShareAlt className="text-green-500 text-3xl mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Powerful Analytics
              </h2>
              <p className="text-gray-600">
                Gain insights into your link performance with our comprehensive
                analytics dashboard. Track clicks, user engagement, and
                geographical data to optimize your marketing strategy.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-5">
            <FaEdit className="text-purple-500 text-3xl mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Enhance Security
              </h2>
              <p className="text-gray-600">
                Rest assured with our robust security measures. All shortened
                URLs are protected with encryption, ensuring your data remains
                safe and secure.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-5">
            <FaChartLine className="text-red-500 text-3xl mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Fast and Reliable
              </h2>
              <p className="text-gray-600">
                Enjoy lightning-fast redirects and high uptime with our reliable 
                infrastructure. Your shortened links will always be available and 
                responsive, ensuring a seamless experience for your users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
