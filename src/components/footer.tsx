"use client";

export const Footer = () => {
  return (
    <footer className="relative border-t border-gray-200 py-8 mt-auto bg-white">
      {/* 装饰渐变线 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="text-center">
        <p className="text-gray-500 text-sm mb-2">
          Copyright © 2025-至今{' '}
          <span className="text-gray-700 font-medium">科虎智能信息</span>{' '}
          版权所有
        </p>
        <p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors text-sm"
          >
            粤ICP备2024269283号-1
          </a>
        </p>
      </div>
    </footer>
  );
};
