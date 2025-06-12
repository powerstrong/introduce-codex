import Link from "next/link";

export default function Page2() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-900 via-cyan-900 to-black opacity-80" />
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-sky-500 opacity-30 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-600 opacity-30 rounded-full blur-[100px]" />
      <div className="absolute top-4 left-4 z-20">
        <Link href="/" className="font-semibold hover:underline">
          MARA
        </Link>
      </div>
      <main className="text-center max-w-3xl z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-200 to-blue-300 text-transparent bg-clip-text drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]">
          아키텍처 – march 프레임워크와 모듈 시스템
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          MARA는 내부적으로 march(modular architecture) 프레임워크 위에 구성되어 있습니다.
        </p>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          march는 다양한 기능 모듈을 런타임에 불러와 동적으로 연결하고 실행할 수 있도록 설계된 통신 미들웨어입니다. 이를 통해 컴파일 없이 모듈 교체, 모듈 단위 테스트와 병렬 실행, 설정 파일만으로 시스템 구성 변경이 가능합니다.
        </p>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          모든 모듈은 Module(계산 중심, 일시적 실행)과 RunnableModule(지속적 동작, 별도 스레드 실행) 두 인터페이스 중 하나를 기반으로 작성되며, MARA의 구성 요소는 이를 상속해 독립적으로 구현됩니다.
        </p>
        <div className="mt-8">
          <Link href="/overview" className="underline hover:text-gray-300">
            다음 페이지 →
          </Link>
        </div>
      </main>
    </div>
  );
}