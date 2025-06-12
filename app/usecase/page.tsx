import Link from "next/link";

export default function Page4() {
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
          활용 사례 – 양팔 로봇에서의 MARA 적용
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          MARA는 현재 PLAiF의 양팔 로봇 프로젝트에 적용되어 왼팔의 커넥터 삽입 및 체결, 오른팔의 더스트 커버 파지 및 체결 작업을 수행합니다.
        </p>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          각 동작은 모션 제어, 강화학습 기반 제어, 비전 인식, 장치 인터페이스 등의 모듈로 분리되어 모든 동작을 28초 이내에 완료합니다.
        </p>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          MARA 도입으로 각 모듈의 독립 디버깅이 가능해 유지보수 효율이 향상되었고, 티칭 펜던트와 연동된 GUI로 현장 운용이 개선되며, 새로운 제어 알고리즘을 플러그인 형태로 적용할 수 있게 되었습니다.
        </p>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          MARA는 복잡한 작업을 명확한 구조로 나누어 로봇 시스템의 유연성과 확장성을 극대화합니다.
        </p>
        <div className="mt-8">
          <Link href="/" className="underline hover:text-gray-300">
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}