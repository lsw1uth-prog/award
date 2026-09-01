/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Code2, Rocket, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-6 antialiased selection:bg-neutral-800">
      <main className="w-full max-w-xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          ระบบพร้อมทำงานเรียบร้อยแล้ว (Ready)
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50">
            คุณต้องการสร้างแอปอะไรวันนี้?
          </h1>
          <p className="text-neutral-400 text-base leading-relaxed max-w-md mx-auto">
            โปรเจกต์ได้รับการเริ่มต้นและเชื่อมต่อสภาพแวดล้อมเสร็จสิ้นแล้ว สามารถพิมพ์บอกสิ่งที่ต้องการสร้างได้เลย
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
          <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800/80 space-y-1.5">
            <div className="text-neutral-400">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <p className="font-medium text-sm text-neutral-200">AI & Utility Tools</p>
            <p className="text-xs text-neutral-400">ตัวแปลงไฟล์, ตัวช่วยสรุป, แชตบอท</p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800/80 space-y-1.5">
            <div className="text-neutral-400">
              <Code2 className="w-5 h-5 text-sky-400" />
            </div>
            <p className="font-medium text-sm text-neutral-200">Dashboard & CRM</p>
            <p className="text-xs text-neutral-400">จัดการข้อมูล, บันทึกการเงิน, สถิติ</p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800/80 space-y-1.5">
            <div className="text-neutral-400">
              <Rocket className="w-5 h-5 text-indigo-400" />
            </div>
            <p className="font-medium text-sm text-neutral-200">Web App & Games</p>
            <p className="text-xs text-neutral-400">เกมแบบโต้ตอบ, บอร์ดแคนวาส, โน้ต</p>
          </div>
        </div>

        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-neutral-400">
          <span>พิมพ์ข้อความในช่องแชทด้านล่างเพื่อเริ่มสร้างได้ทันที</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </main>
    </div>
  );
}

