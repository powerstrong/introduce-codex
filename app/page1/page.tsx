import Link from "next/link";

export default function Page1() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-900 via-cyan-900 to-black opacity-80" />
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-sky-500 opacity-30 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-600 opacity-30 rounded-full blur-[100px]" />
      <main className="text-center max-w-3xl z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-200 to-blue-300 text-transparent bg-clip-text drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]">
          개요 – MARA란 무엇인가?
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          MARA(MOdular Architecture for Robot Arms)는 PLAiF에서 개발한 차세대 로봇 제어 아키텍처입니다. 기존 로봇 시스템의 단일 구조와는 달리, 모든 구성 요소를 모듈 단위로 나누어 유연하게 제어할 수 있는 구조를 제공합니다.
        </p>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          MARA는 로봇 동작 구조의 복잡성, 시스템 구성 변경의 어려움, 유지보수 및 디버깅의 비효율성을 해결하기 위해 모듈화, 런타임 연결, 로컬 최적화 통신이라는 세 가지 핵심 설계를 따릅니다.
        </p>
        <div className="mt-8">
          <Link href="/page2" className="underline hover:text-gray-300">
            다음 페이지 →
          </Link>
        </div>
      </main>
    </div>
  );
}
