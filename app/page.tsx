import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* Background Glow & Gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-900 via-cyan-900 to-black opacity-80" />
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-sky-500 opacity-30 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-600 opacity-30 rounded-full blur-[100px]" />

      {/* Content */}
      <main className="text-center max-w-3xl z-10">
        <Image
          src="/plaif_logo-332.png"
          alt="MARA Logo"
          width={100}
          height={100}
          className="mx-auto mb-6 opacity-90"
        />

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-200 to-blue-300 text-transparent bg-clip-text drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]">
          MARA: Modular Architecture for Robot Arms
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          MARA is PLAiF's intelligent middleware for controlling robot arms with modular, scalable architecture.  
          It overcomes the limitations of monolithic control systems by enabling real-time, parallel decision making across diverse robot components.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://plaif.notion.site/MARA-Documentation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-100 transition shadow-lg"
          >
            Read Documentation
          </a>
          <a
            href="https://www.youtube.com/watch?v=g_Ow0JKbMw8"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white/10 transition font-medium"
          >
            Watch Demo →
          </a>
        </div>
      </main>

      <footer className="absolute bottom-6 text-sm text-gray-400 z-10">
        Built by PLAiF · <a href="https://www.plaif.com" className="underline hover:text-white">plaif.com</a>
      </footer>
    </div>
  );
}
