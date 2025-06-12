import Link from "next/link";

export default function UsagePage() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-900 via-cyan-900 to-black opacity-80" />
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-sky-500 opacity-30 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-600 opacity-30 rounded-full blur-[100px]" />
      <main className="text-center max-w-3xl z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-200 to-blue-300 text-transparent bg-clip-text drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]">
          사용 방식 – 구성, 실행, 관리
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          MARA 시스템은 다음 세 가지 구성 요소로 운용됩니다:
        </p>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          1. 설정 파일(march.yaml) – 각 모듈의 경로, 인자, 연결 관계를 정의합니다.
        </p>
        <p className="mt-2 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          2. 실행기(march-runner) – 설정 파일을 읽어 각 모듈을 로딩하고 연결하여 런타임에서 실행합니다.
        </p>
        <p className="mt-2 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          3. 모듈 저장소(sw_march_modules) – 모듈 구현을 관리하며 CLI 스크립트를 통해 쉽게 추가·삭제할 수 있습니다.
        </p>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          CMake 기반 빌드 체인을 통해 모듈을 추가하면 자동으로 빌드 구성이 반영됩니다.
        </p>
        <div className="mt-8">
          <Link href="/usecase" className="underline hover:text-gray-300">
            다음 페이지 →
          </Link>
        </div>
      </main>
    </div>
  );
}
