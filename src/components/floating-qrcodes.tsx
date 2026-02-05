"use client";

import Image from 'next/image';
import { FaWeixin } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';

interface QRCodeItem {
  icon: React.ElementType;
  title: string;
  image: string;
  description: string;
  color: string;
  hoverColor: string;
}

const qrcodes: QRCodeItem[] = [
  {
    icon: FaWeixin,
    title: "关注公众号",
    image: "/images/qrcode/public_qrcode.jpg",
    description: "获取最新AI资讯和教程",
    color: "neon-green",
    hoverColor: "from-neon-green to-emerald-500"
  },
  {
    icon: IoMdPeople,
    title: "加入社群",
    image: "/images/qrcode/zsxq_qrcode.png",
    description: "与成员交流学习",
    color: "neon-blue",
    hoverColor: "from-neon-blue to-neon-cyan"
  }
];

export const FloatingQRCodes = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {qrcodes.map((qr, index) => {
        const Icon = qr.icon;
        return (
          <div key={index} className="relative group">
            {/* QR Code Popup */}
            <div className="absolute bottom-0 right-14 mb-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out transform translate-x-4 group-hover:translate-x-0">
              <div className="relative glass-card p-5 w-[240px] border border-white/20">
                {/* 渐变背景装饰 */}
                <div className={`absolute inset-0 bg-gradient-to-r ${qr.hoverColor} opacity-5 rounded-2xl`} />

                {/* QR Code Image */}
                <div className="relative w-full h-[200px] mb-4 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={qr.image}
                    alt={qr.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title with Icon */}
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-5 h-5 text-${qr.color}`} />
                  <h3 className="text-base font-bold text-white">
                    {qr.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {qr.description}
                </p>

                {/* Decorative Arrow */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-dark-100 rotate-45 border-r border-t border-white/20" />
                </div>
              </div>
            </div>

            {/* Icon Button */}
            <button
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-dark-100 border border-white/20 hover:border-${qr.color}/50 text-gray-300 hover:text-${qr.color} shadow-lg hover:shadow-${qr.color}/20 group-hover:scale-110`}
            >
              <Icon className="w-5 h-5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
