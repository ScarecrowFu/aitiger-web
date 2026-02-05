"use client";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 py-8 mt-auto bg-dark/50">
      {/* 装饰光效 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

      <div className="text-center">
        <p className="text-gray-400 text-sm mb-2">
          Copyright © 2025-至今{' '}
          <span className="text-gray-300">科虎智能信息</span>{' '}
          版权所有
        </p>
        <p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-neon-blue transition-colors text-sm"
          >
            粤ICP备2024269283号-1
          </a>
        </p>
      </div>
    </footer>
  );
};
