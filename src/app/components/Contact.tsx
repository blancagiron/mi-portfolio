"use client";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 container mx-auto px-4 sm:px-6 max-w-7xl relative overflow-hidden"
    >
      {/* Background Phone Icon - hidden on small screens */}
      <div className="hidden md:block absolute left-30 top-1/2 -translate-y-1/2 -translate-x-[15%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-35 pointer-events-none">
        <Image
          src="/phone.png"
          alt="Contact background"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-end mb-12 md:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
            Contact <span className="text-blue-400">me! :)</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Message */}
          <div className="space-y-4 md:space-y-6 relative">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Got an idea?
              <br />
              <span className="text-red-500">Let's talk!</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just
              want to say hi, I'd love to hear from you.
            </p>
          </div>

          {/* Right side - Contact Cards */}
          <div className="space-y-3 md:space-y-4">
            {/* Email Card */}
            <div className="group bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-400 transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-blue-600 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-gray-500 font-medium">Email</p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-blue-400 transition-colors duration-300 truncate">
                    gironricoyb@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/blancagiroon"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-400 transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-blue-600 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-gray-500 font-medium">LinkedIn</p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-blue-400 transition-colors duration-300">
                    Connect with me
                  </p>
                </div>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/blancagiron"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-400 transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-blue-600 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-gray-500 font-medium">GitHub</p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-blue-400 transition-colors duration-300">
                    Check my projects
                  </p>
                </div>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>

            {/* Download CV Button */}
            <a
              href="/CV_BGironRicoy.pdf"
              download
              className="group block bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-400 transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-blue-600 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-gray-500 font-medium">Resume</p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-blue-400 transition-colors duration-300">
                    Download my CV
                  </p>
                </div>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;