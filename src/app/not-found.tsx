import { FileQuestion, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
          <FileQuestion className="w-12 h-12 text-blue-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          페이지를 찾을 수 없어요
        </h1>
        <p className="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          주소를 다시 확인해주세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            홈으로 이동
          </Link>
          <Link
            href="/simulation/mytube"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            시뮬레이션 체험하기
          </Link>
        </div>
      </div>
    </div>
  );
}
