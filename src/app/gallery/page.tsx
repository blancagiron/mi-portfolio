"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";
import {
  Github,
} from "lucide-react";

const techColors: { [key: string]: string } = {
  Java: "border-red-500 bg-red-50 text-red-700",
  Python: "border-blue-500 bg-blue-50 text-blue-700",
  Flask: "border-red-500 bg-red-50 text-red-700",
  MongoDB: "border-green-600 bg-green-50 text-green-700",
  React: "border-cyan-400 bg-cyan-50 text-cyan-700",
  Vite: "border-purple-500 bg-purple-50 text-purple-700",
  "Tailwind CSS": "border-cyan-500 bg-cyan-50 text-cyan-700",
  "Java Swing": "border-orange-600 bg-orange-50 text-orange-700",
  Bootstrap: "border-purple-600 bg-purple-50 text-purple-700",
  "Node.js": "border-green-600 bg-green-50 text-green-700",
  Express: "border-gray-700 bg-gray-50 text-gray-700",
  Docker: "border-blue-600 bg-blue-50 text-blue-700",
  NetBeans: "border-blue-600 bg-blue-50 text-blue-700",
  Ant: "border-gray-600 bg-gray-50 text-gray-700",
  "python-telegram-bot": "border-blue-600 bg-blue-50 text-blue-700",
};

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 min-h-screen bg-stone-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            Project <span className="text-purple-500">Gallery</span>
          </h1>

          {/* MyPaint */}
          <section id="MyPaint" className="mb-32">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-md border border-gray-100">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                MyPaint
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                A desktop image editing application inspired by Microsoft Paint,
                built with Java and Swing. Developed as part of the Multimedia
                Systems course, it includes tools for drawing, color selection,
                and applying filters and transformations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {["mp1.png", "mp2.png", "mp3.png"].map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                  >
                    <Image
                      src={`/MyPaint/${img}`}
                      alt={`MyPaint screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <ul className="text-gray-700 text-lg space-y-2 list-disc list-inside mb-8">
                <li>Shape drawing: lines, curves, polygons, and freehand</li>
                <li>Text and selection tools with attribute editing</li>
                <li>Image operations: rotate, tint, contrast, brightness</li>
                <li>Filters: blur, relief, sharpen, and posterization</li>
              </ul>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Java", "Java Swing", "NetBeans", "Ant"].map((tech) => (
                  <span
                    key={tech}
                    className={`text-sm px-4 py-2 rounded-full border-2 font-semibold ${techColors[tech]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/blancagiron/MyPaint"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-colors duration-300"
              >
                <Github className="w-5 h-5" /> View on GitHub
              </a>
            </div>
          </section>

          {/* ErasmusUGR */}
          <section id="ErasmusUGR" className="mb-32">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-md border border-gray-100">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                ErasmusUGR
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                A comprehensive web platform developed as my Final Degree
                Project (TFG) at the University of Granada. It digitalizes and
                streamlines the Erasmus+ mobility process, connecting students,
                tutors, and administrators.
              </p>

              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-100 mb-8">
                <video
                  controls
                  poster="/erasmus-thumbnail.png"
                  className="w-full h-full"
                >
                  <source src="/ErasmusUGR/demoErasmus.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {["React", "Vite", "Tailwind CSS", "Flask", "MongoDB"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className={`text-sm px-4 py-2 rounded-full border-2 font-semibold ${techColors[tech]}`}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <a
                href="https://github.com/blancagiron/eramus-ugr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-colors duration-300"
              >
                <Github className="w-5 h-5" /> View on GitHub
              </a>
            </div>
          </section>

          {/* GranaBus */}
          <section id="GranaBus" className="mb-32">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-md border border-gray-100">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                GranaBus
              </h2>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                A Telegram bot providing real-time interurban bus schedules in
                Granada. It uses the official Transport Consortium API to fetch
                and format live data, allowing users to check arrivals by stop
                name.
              </p>

              {/* Image Grid — 4 vertical screenshots */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  "granabus1.jpg",
                  "granabus2.jpg",
                  "granabus3.jpg",
                  "granabus4.jpg",
                ].map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-[9/19] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-gray-100"
                  >
                    <Image
                      src={`/GranaBus/${img}`}
                      alt={`GranaBus screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <ul className="text-gray-700 text-lg space-y-2 list-disc list-inside mb-8">
                <li>Built with Flask and python-telegram-bot library</li>
                <li>Uses external REST API for live data</li>
                <li>Error handling and user-friendly text responses</li>
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["Python", "Flask", "python-telegram-bot"].map((tech) => (
                  <span
                    key={tech}
                    className={`text-sm px-4 py-2 rounded-full border-2 font-semibold ${techColors[tech]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub button */}
              <a
                href="https://github.com/blancagiron/granabus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-colors duration-300"
              >
                <Github className="w-5 h-5" /> View on GitHub
              </a>
            </div>
          </section>

          {/* Online Store */}
          <section id="TiendaOnline" className="mb-32">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-md border border-gray-100">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                Online Store
              </h2>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                A full-stack e-commerce web application created for the
                “Internet Application Development” course. Features product
                browsing, shopping cart, authentication, and admin management
                dashboard.
              </p>

              {/* Image Grid — 4 horizontal screenshots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {["t1.png", "t2.png", "t3.png", "t4.png"].map(
                  (img, index) => (
                    <div
                      key={index}
                      className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-gray-100"
                    >
                      <Image
                        src={`/TiendaOnline/${img}`}
                        alt={`Online Store screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )
                )}
              </div>

              <ul className="text-gray-700 text-lg space-y-2 list-disc list-inside mb-8">
                <li>React + Node.js full stack with RESTful API</li>
                <li>
                  Persistent data with MongoDB and Docker containerization
                </li>
                <li>Responsive UI styled with Bootstrap</li>
              </ul>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "React",
                  "Vite",
                  "Bootstrap",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className={`text-sm px-4 py-2 rounded-full border-2 font-semibold ${techColors[tech]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub button */}
              <a
                href="https://github.com/blancagiron/Tienda-Online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-colors duration-300"
              >
                <Github className="w-5 h-5" /> View on GitHub
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default GalleryPage;
