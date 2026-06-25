import type { CtScanProtocol } from "../domain/risk-engine/types.ts";

export const CT_PROTOCOLS: CtScanProtocol[] = [
  { id: 1, nameEn: "Brain CT (Standard)", nameFa: "سی تی مغز (استاندارد)", effectiveDose: 2.0 },
  { id: 2, nameEn: "Brain and Neck CTA/CTP", nameFa: "سی تی آنژیو/پرفیوژن مغز و گردن", effectiveDose: 16.4 },
  { id: 3, nameEn: "Neck CT", nameFa: "سی تی گردن", effectiveDose: 6.0 },
  { id: 4, nameEn: "Chest CT (Low Dose)", nameFa: "سی تی قفسه سینه (دوز کم)", effectiveDose: 2.0 },
  { id: 5, nameEn: "Chest CT (Standard)", nameFa: "سی تی قفسه سینه (استاندارد)", effectiveDose: 7.0 },
  { id: 6, nameEn: "Chest CT (PE Study)", nameFa: "سی تی قفسه سینه (بررسی آمبولی ریه)", effectiveDose: 15.0 },
  { id: 7, nameEn: "Cardiac CT (Coronary CTA)", nameFa: "سی تی قلب (آنژیوگرافی عروق کرونر)", effectiveDose: 16.0 },
  { id: 8, nameEn: "Cardiac CT (Calcium Scoring)", nameFa: "سی تی قلب (امتیاز کلسیم)", effectiveDose: 3.0 },
  { id: 9, nameEn: "Abdomen CT", nameFa: "سی تی شکم", effectiveDose: 8.0 },
  { id: 10, nameEn: "Abdomen CT (Dedicated Liver)", nameFa: "سی تی شکم (اختصاصی کبد)", effectiveDose: 15.0 },
  { id: 11, nameEn: "Abdomen and Pelvis CT", nameFa: "سی تی شکم و لگن", effectiveDose: 14.0 },
  { id: 12, nameEn: "Chest, Abdomen and Pelvis CT", nameFa: "سی تی قفسه سینه، شکم و لگن", effectiveDose: 21.0 },
  { id: 13, nameEn: "Pelvis CT", nameFa: "سی تی لگن", effectiveDose: 6.0 },
  { id: 14, nameEn: "Sinus CT", nameFa: "سی تی سینوس", effectiveDose: 0.7 },
  { id: 15, nameEn: "Virtual Colonoscopy CT", nameFa: "سی تی کولونوسکوپی مجازی", effectiveDose: 10.0 },
  { id: 16, nameEn: "Dental CT", nameFa: "سی تی دندان", effectiveDose: 0.2 },
  { id: 17, nameEn: "Lumbar Spine CT", nameFa: "سی تی ستون فقرات کمری", effectiveDose: 5.6 },
  { id: 18, nameEn: "Thoracic Spine CT", nameFa: "سی تی ستون فقرات پشتی", effectiveDose: 10.0 },
];
