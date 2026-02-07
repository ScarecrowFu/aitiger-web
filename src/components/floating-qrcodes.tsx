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
  bgColor: string;
  borderColor: string;
}

const qrcodes: QRCodeItem[] = [
  {
    icon: FaWeixin,
    title: "关注公众号",
    image: "/images/qrcode/public_qrcode.jpg",
    description: "获取最新AI资讯和教程",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200 hover:border-green-400"
  },
  {
    icon: IoMdPeople,
    title: "加入社群",
    image: "/images/qrcode/zsxq_qrcode.png",
    description: "与成员交流学习",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200 hover:border-blue-400"
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
              <div className="relative bg-white rounded-2xl shadow-xl p-5 w-[240px] border border-gray-200">
                {/* 渐变背景装饰 */}
                <div className={`absolute inset-0 ${qr.bgColor} opacity-30 rounded-2xl`} />

                {/* QR Code Image */}
                <div className="relative w-full h-[200px] mb-4 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                  <Image
                    src={qr.image}
                    alt={qr.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title with Icon */}
                <div className="relative flex items-center gap-2 mb-2">
                  <Icon className={`w-5 h-5 ${qr.color}`} />
                  <h3 className="text-base font-bold text-gray-800">
                    {qr.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="relative text-sm text-gray-500 leading-relaxed">
                  {qr.description}
                </p>

                {/* Decorative Arrow */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-white rotate-45 border-r border-t border-gray-200" />
                </div>
              </div>
            </div>

            {/* Icon Button */}
            <button
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-white border ${qr.borderColor} ${qr.color} shadow-md hover:shadow-lg group-hover:scale-110`}
            >
              <Icon className="w-5 h-5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
