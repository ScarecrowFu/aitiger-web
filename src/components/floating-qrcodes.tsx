"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaWeixin } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { RiVipCrownFill } from 'react-icons/ri';

interface QRCodeItem {
  icon: React.ElementType;
  title: string;
  image: string;
  description: string;
  color: string;
}

const qrcodes: QRCodeItem[] = [
  {
    icon: FaWeixin,
    title: "关注公众号",
    image: "/images/qrcode/public_qrcode.jpg",
    description: "获取最新AI资讯和教程",
    color: "from-green-400 to-green-600"
  },
  {
    icon: IoMdPeople,
    title: "加入社群",
    image: "/images/qrcode/zsxq_qrcode.png",
    description: "与成员交流学习",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: RiVipCrownFill,
    title: "WildCard优惠",
    image: "/images/qrcode/WildCard_qrcode.png",
    description: "限时特惠注册",
    color: "from-purple-400 to-purple-600"
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
            <div className="absolute bottom-0 right-12 mb-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out transform translate-x-4 group-hover:translate-x-0">
              <div className="bg-white rounded-xl shadow-2xl p-5 w-[240px]">
                {/* 渐变背景装饰 */}
                <div className={`absolute inset-0 bg-gradient-to-r ${qr.color} opacity-5 rounded-xl`}></div>
                
                {/* QR Code Image */}
                <div className="relative w-full h-[200px] mb-4">
                  <Image
                    src={qr.image}
                    alt={qr.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title with Icon */}
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-5 h-5 bg-gradient-to-r ${qr.color} bg-clip-text text-transparent`} />
                  <h3 className="text-base font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {qr.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {qr.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-white rotate-45 shadow-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Icon Button */}
            <button
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-white hover:bg-gradient-to-r ${qr.color} hover:text-white shadow-lg hover:shadow-xl group-hover:scale-110`}
            >
              <Icon className="w-5 h-5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}; 