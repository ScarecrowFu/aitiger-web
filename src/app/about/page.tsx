"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaWeixin, FaEnvelope } from 'react-icons/fa';
import { IoNewspaper } from 'react-icons/io5';
import type { AboutContent } from '@/types/about';

const CONTACT_ICONS = {
  wechat: FaWeixin,
  mp: IoNewspaper,
  email: FaEnvelope
};

export default function AboutPage() {
  const [content, setContent] = useState<AboutContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/content/about/index.json')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error loading content:', err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading || !content) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-xl">Loading...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-[85%] mx-auto py-32 px-6">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 relative"
        >
          <h1 className="text-4xl font-bold mb-6">{content.hero.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.hero.description}
          </p>
        </motion.div>

        {/* 关于我们 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
            {content.about.title}
          </h2>
          {content.about.content.map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* 核心价值观 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
            {content.values.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.values.list.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 团队成员 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
            {content.team.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.team.members.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 bg-gray-50 rounded-xl p-6"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-500 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 发展历程 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
            {content.milestones.title}
          </h2>
          <div className="space-y-8">
            {content.milestones.list.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start gap-6 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  {index !== content.milestones.list.length - 1 && (
                    <div className="w-0.5 h-24 bg-blue-100"></div>
                  )}
                </div>
                <div>
                  <span className="text-blue-500 font-medium">{milestone.date}</span>
                  <h3 className="text-lg font-bold mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 联系我们 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
            {content.contact.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {content.contact.list.map((item, index) => {
              const Icon = CONTACT_ICONS[item.type];
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl"
                >
                  <Icon className="w-10 h-10 text-blue-500" />
                  <div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    <div className="font-medium text-lg">{item.value}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}