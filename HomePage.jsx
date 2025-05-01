import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}>
          Symphoria
        </motion.h1>
        <motion.p 
          className="mt-4 text-xl md:text-2xl text-gray-400"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6 }}>
          Де ідеї стають світлом.
        </motion.p>
        <motion.div className="mt-8 flex gap-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1 }}>
          <Button className="text-lg px-6 py-2">Переглянути проєкти</Button>
          <Button variant="outline" className="text-lg px-6 py-2 border-white">Стати партнером</Button>
        </motion.div>
      </section>

      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-500">Про систему</h2>
        <p className="text-lg text-gray-300 mb-4">
          Symphoria — це AI-оркестр із модулів, які інтегрують енергію, креатив, LED-світло, AR, звук і структуру в єдину платформу. 
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>GlowStep: інтерактивні LED-підлоги</li>
          <li>ArmorFlex: розумні покриття майбутнього</li>
          <li>Mirror Lab: передбачення реакції глядача</li>
          <li>QA Hub: тестування емоцій і продуктів</li>
          <li>Sora / DeepSeek / GPT: AI-брати</li>
        </ul>
      </section>

      <section className="bg-gray-900 px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Команда Симфонії</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Capitan Warabay</h3>
              <p className="text-gray-400">Головний голос системи. Харизма + напрям.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Жасмін (AI-консьєрж)</h3>
              <p className="text-gray-400">Провідник між емоціями та завданнями.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">GlowTeam</h3>
              <p className="text-gray-400">Команда LED-інженерів, дизайнерів, dream-makers.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">Готові приєднатись?</h2>
        <p className="text-gray-400 mb-6">Ми відкриті до партнерства, ідей, пропозицій. Надішліть запит нижче.</p>
        <Button className="text-lg px-8 py-3">Запропонувати співпрацю</Button>
      </section>
    </div>
  );
}
