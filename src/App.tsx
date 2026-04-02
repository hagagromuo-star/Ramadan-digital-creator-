/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  HelpCircle, 
  Instagram, 
  ArrowRight, 
  DollarSign, 
  Package, 
  Clock,
  TrendingUp,
  Globe,
  Award,
  Users,
  Sparkles,
  Send
} from "lucide-react";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Hide navbar if scrolling down and not at the very top
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const instagramUrl = "https://www.instagram.com/halal.ramadan2";
  const profileImageUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYQdMraxA_8-FlqmuOCZn95hpjkegMc846x2L0g4zz4a1gzhZz05ufZAKTd2F8oD-yNCYmWk55t7AjnH2CAwBDwn65Jci0lqeWAx6x-m-lDFQ2PVMeCng2EnF5wqC9FuOQ7PooV8QrV5POzJiohf04W8v-bskyH0p4M9quQGfFVR-XzQlWt_LV29FiIdk/s16000/IMG_20260309_215614_616.webp";
  const courseImageUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxVRAyguMKgNsnUfWwHEiU-n9WheUrIsRUnJAgkgRmbWz5wzDPbvi_25Fr4a7_DdifkKpyiCc0nKSmyyx2dy-9K8Hen3O4hmx7Wkiyj-Z24VTWE_k_47kRb8OJQd1anED2Oq7vUkpWsd8NUJPVvyPNhyTUawa9SU8twIAjVACfjIgr4ryDkrdzJ7GjK30/s16000/1_20260228_202607_0000.png";
  const packageImageUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjU5kqF6dF5RPTMSRzKboxSvScSpPVSfS4lHSl9oufY2MCqsi1qjElX87MFgZclAyHkll1Xp3THH3ikQAf1zl3_szoKzMwdkU6VR-ZcZ_iOz47x89e8J3FyevoHCkZfRfA804NwATu0R3lk6qZW1NHVGTS8U4FmsaKmJK_arDL2PCtPhHzrcB7t6SIX-Xk/s16000/%D8%A7_20260214_003031_0000.png";
  const freeGuideImageUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd1vKwdUtb4F7-IPW9gb9EZF6IhfzjpWSLoYwhXr_GILmmBoR0Bc_xkmS3gM_DfeLmdQrfDD1PsGdlFjUk2Ufe5rKgZ2L3LKOofHfRg0flQPedgKrjmtzEjj-oJxX-6rEyEPmjsZmtz-QF6Te-o3Flx2QHmP88s4BS_l57E6wE8ANAUkGrptpVK6d5Aeg/s16000/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D8%B1%D8%A8%D8%AD%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D9%87%20%D8%A8%D8%AF%D9%88%D9%86%20%D8%A7%D9%84%D8%B8%D9%87%D9%88%D8%B1%20_20260220_094227_0000.png";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand selection:text-white overflow-x-hidden" dir="rtl">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
      </div>

      {/* Navigation / Header */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 glass border-2 border-brand/60 py-2 px-6 rounded-full flex justify-between items-center backdrop-blur-xl w-[95%] max-w-5xl shadow-[0_0_25px_rgba(255,78,0,0.5),0_0_50px_rgba(255,78,0,0.3),0_0_100px_rgba(255,78,0,0.1)] transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
            <img src={profileImageUrl} alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <span className="font-display font-bold text-base md:text-lg tracking-tight whitespace-nowrap">رمضان | تاجر رقمي</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#features" className="hover:text-brand transition-colors">المميزات</a>
          <a href="#package" className="hover:text-brand transition-colors">الحزمة</a>
          <a href="#faq" className="hover:text-brand transition-colors">الأسئلة</a>
        </div>
        <a 
          href="https://jaguar-business.nzmly.com/l/OhfAhhyAUj" 
          target="_blank"
          className="neon-button-white px-5 py-2 text-[10px] md:text-xs"
        >
          ابدأ الآن
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-[100px] font-display font-black leading-[1.1] mb-8 tracking-tighter">
              حوّل موبايلك <br />
              <span className="text-gradient">لماكينة أرباح</span>
            </h1>

            <p className="text-xl md:text-3xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              اكتشف أسرار <span className="text-brand font-bold underline underline-offset-8 decoration-brand/30">المنتجات الرقمية</span> وكيف يمكنك بناء بيزنس يدر عليك دخلاً سلبياً 24/7 بدون الحاجة لخبرة أو رأس مال ضخم.
            </p>

            <div className="flex flex-col items-center gap-8">
              <a 
                href="https://jaguar-business.nzmly.com/l/OhfAhhyAUj"
                target="_blank"
                className="neon-button group"
              >
                <span>ابدأ رحلتك الآن</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white/5 glass">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5" />
              <span className="font-bold tracking-widest text-xs">GROWTH</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5" />
              <span className="font-bold tracking-widest text-xs">GLOBAL</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5" />
              <span className="font-bold tracking-widest text-xs">CERTIFIED</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span className="font-bold tracking-widest text-xs">COMMUNITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Bento Grid */}
      <section id="features" className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">لماذا التجارة الرقمية؟</h2>
          <p className="text-white/60 max-w-2xl mx-auto">نحن نحل أكبر العوائق التي تمنعك من البدء في العمل الحر أونلاين</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div {...fadeIn} className="md:col-span-2 glass p-10 rounded-[2.5rem] flex flex-col justify-between group hover:border-brand/30 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 group-hover:bg-brand transition-colors">
                <DollarSign className="w-6 h-6 text-brand group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">لا حاجة لرأس مال</h3>
              <p className="text-white/70 leading-relaxed">انسَ تكاليف الشحن، المخازن، أو شراء المنتجات بكميات كبيرة. المنتجات الرقمية تُصنع مرة واحدة وتُباع للأبد.</p>
            </div>
            <div className="mt-8 flex justify-end">
              <div className="text-brand font-bold text-sm tracking-widest">01 / LOW RISK</div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="glass p-10 rounded-[2.5rem] group hover:border-brand/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 group-hover:bg-brand transition-colors">
              <ShieldCheck className="w-6 h-6 text-brand group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">خصوصية تامة</h3>
            <p className="text-white/70 leading-relaxed">يمكنك بناء إمبراطوريتك دون الحاجة للظهور بوجهك أو مشاركة حياتك الخاصة.</p>
            <div className="mt-8 text-brand font-bold text-sm tracking-widest">02 / PRIVATE</div>
          </motion.div>

          <motion.div {...fadeIn} className="glass p-10 rounded-[2.5rem] group hover:border-brand/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 group-hover:bg-brand transition-colors">
              <Smartphone className="w-6 h-6 text-brand group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">الحرية المطلقة</h3>
            <p className="text-white/70 leading-relaxed">كل ما تحتاجه هو هاتفك الذكي واتصال بالإنترنت لتدير عملك من أي مكان في العالم.</p>
            <div className="mt-8 text-brand font-bold text-sm tracking-widest">03 / MOBILE</div>
          </motion.div>

          <motion.div {...fadeIn} className="md:col-span-2 glass p-10 rounded-[2.5rem] flex flex-col justify-between group hover:border-brand/30 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 group-hover:bg-brand transition-colors">
                <Zap className="w-6 h-6 text-brand group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">بداية فورية</h3>
              <p className="text-white/40 leading-relaxed">نحن نوفر لك المنتجات الجاهزة مع حقوق إعادة البيع، مما يعني أنك ستبدأ في جني الأرباح من اليوم الأول.</p>
            </div>
            <div className="mt-12 flex justify-end">
              <div className="text-brand font-bold text-sm tracking-widest">04 / INSTANT</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Section */}
      <section id="package" className="py-16 px-6 bg-white/[0.02] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">محتويات <br /><span className="text-brand">الحزمة الشاملة</span></h2>
              <p className="text-lg text-white/70 mb-12 leading-relaxed">كل الأدوات والمنتجات التي تحتاجها لبناء بيزنس رقمي ناجح في حزمة واحدة مصممة بعناية.</p>
              
              <div className="space-y-6">
                {[
                  "أكثر من 5 كتب رقمية في مجالات عالية الطلب",
                  "دليل التسويق والبيع خطوة بخطوة للمبتدئين",
                  "حقوق إعادة البيع الكاملة (MRR)",
                  "قوالب جاهزة للمحتوى الإعلاني والستوري",
                  "متابعة شخصية ودعم فني مستمر"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center group-hover:bg-brand transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-brand group-hover:text-white" />
                    </div>
                    <span className="text-lg font-medium text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src={packageImageUrl} 
                    alt="Books Package" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </div>

              <div className="glass p-12 rounded-[3rem] relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand rounded-full flex items-center justify-center font-black text-xl rotate-12 shadow-xl shadow-brand/40">
                  OFFER
                </div>
                <div className="space-y-8">
                  <div className="pb-8 border-b border-white/10">
                    <h4 className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold mb-2">استثمارك اليوم</h4>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-baseline gap-1">
                        <span className="text-6xl font-black">7</span>
                        <span className="text-2xl font-bold">$</span>
                      </div>
                    </div>
                  </div>
                <ul className="space-y-4">
                  <li className="flex justify-between text-sm">
                    <span className="text-white/40">المنتجات الرقمية</span>
                    <span className="text-brand">مشمولة</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-white/40">حقوق البيع</span>
                    <span className="text-brand">مشمولة</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-white/40">الدعم الفني</span>
                    <span className="text-brand">مشمول</span>
                  </li>
                </ul>
                <a 
                  href="https://alfan.link/ramadandigital"
                  target="_blank"
                  className="dual-neon-button w-full"
                >
                  احصل على الحزمة الآن
                </a>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Bundle Offer Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand/5 blur-[120px] rounded-full -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glass p-6 sm:p-12 md:p-20 rounded-[4rem] border-brand/20 shadow-[0_0_100px_rgba(255,78,0,0.1)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Images Side */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <motion.div 
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [-6, -4, -6]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-20 hover:rotate-0 transition-transform duration-700"
                >
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-[0_40px_80px_-15px_rgba(255,78,0,0.4)] border border-white/20">
                    <img src={courseImageUrl} alt="Course" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  {/* Inner Glow Shadow */}
                  <div className="absolute -inset-4 bg-brand/10 blur-2xl rounded-[3rem] -z-10 opacity-50"></div>
                </motion.div>
                <motion.div 
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [6, 8, 6]
                  }}
                  transition={{ 
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-12 left-12 z-10 hover:rotate-0 transition-transform duration-700 opacity-80"
                >
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border border-white/10">
                    <img src={packageImageUrl} alt="Package" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  {/* Subtle Shadow Glow */}
                  <div className="absolute -inset-4 bg-black/20 blur-2xl rounded-[3rem] -z-10"></div>
                </motion.div>
                <div className="absolute -inset-10 bg-brand/20 blur-[100px] rounded-full -z-10"></div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand text-white text-xs font-black tracking-widest uppercase">
                  <Zap className="w-4 h-4 fill-current" />
                  العرض الذهبي الشامل
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">الكورس التدريبي + <br /><span className="text-brand">حزمة الكتب الرقمية</span></h2>
                <p className="text-xl text-white/60 leading-relaxed">وفر أكثر من 60% واحصل على كل ما تحتاجه للنجاح في عالم المنتجات الرقمية. الكورس الشامل لتعلم المهارات، والحزمة الجاهزة للبيع فوراً.</p>
                
                <div className="flex flex-wrap items-center gap-6 py-8 border-y border-white/10">
                  <div className="space-y-1">
                    <span className="text-white/40 text-sm block">السعر الحالي للعرض</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-black text-brand">20</span>
                      <span className="text-xl md:text-2xl font-bold text-brand">$</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-center">
                    <a 
                      href="https://jaguar-business.nzmly.com/l/OhfAhhyAUj"
                      target="_blank"
                      className="premium-glow-button group"
                    >
                      <Sparkles className="w-5 h-5 text-brand fill-brand/20 group-hover:fill-brand transition-all duration-700" />
                      <span>احصل على العرض الشامل الآن</span>
                    </a>
                  </div>
                  <p className="text-center text-white/40 text-sm font-medium">هذا العرض متاح لفترة محدودة جداً</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Guide Unified Section */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-20">
          {/* Image Part */}
          <motion.div 
            {...fadeIn}
            className="relative group flex justify-center"
          >
            <div className="absolute -inset-10 bg-brand/10 blur-[120px] rounded-full opacity-50"></div>
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(255,78,0,0.4)] border border-white/10 rotate-[-4deg] group-hover:rotate-0 transition-all duration-700 hover:scale-[1.05]">
              <img 
                src={freeGuideImageUrl} 
                alt="Free Guide Preview" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </motion.div>

          {/* Text Part */}
          <motion.div {...fadeIn} className="space-y-10">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand">FREE GIFT • هدية مجانية</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-black leading-tight">الدليل المجاني <br /><span className="text-brand">للبداية الصحيحة</span></h2>
            <p className="text-xl md:text-3xl text-white/70 leading-relaxed max-w-3xl mx-auto">هذا الدليل هو بوابتك الأولى لفهم عالم المنتجات الرقمية وكيف تبدأ أولى خطواتك مجاناً وبدون أي تعقيدات.</p>
            <a 
              href="https://drive.google.com/file/d/1MiPsAXfqCMFLc5rRn6kiCphXAar-2TH-/view?usp=drivesdk"
              target="_blank"
              className="neon-button group"
            >
              <span>احصل على الدليل مجاناً</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 max-w-4xl mx-auto">
        <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-display font-black mb-12 text-center">الأسئلة الشائعة</motion.h2>
        
        <div className="space-y-4">
          {[
            { q: "هل أحتاج لخبرة سابقة؟", a: "إطلاقاً. الحزمة مصممة لتأخذك من الصفر حتى أول مبيعة لك، مع شرح مبسط لكل التفاصيل." },
            { q: "كيف أستلم أرباحي؟", a: "الأرباح تعود إليك بنسبة 100% مباشرة عبر وسيلة الدفع التي تختارها (فودافون كاش، بنك، إلخ)." },
            { q: "هل هناك مصاريف إضافية؟", a: "لا توجد أي مصاريف خفية. تشتري الحزمة مرة واحدة وتصبح ملكك للأبد." },
            { q: "ماذا لو لم أحقق نتائج؟", a: "نحن نوفر لك كل الأدوات، والنتائج تعتمد على تطبيقك للخطوات المذكورة في الدليل." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              {...fadeIn}
              className="glass p-8 rounded-3xl group hover:border-brand/30 transition-all cursor-pointer"
            >
              <h4 className="text-xl font-bold mb-4 flex justify-between items-center">
                {item.q}
                <HelpCircle className="w-5 h-5 text-brand opacity-60 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-white/80 leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center relative">
        <div className="absolute inset-0 bg-brand/5 blur-[120px] rounded-full scale-50"></div>
        <motion.div {...fadeIn} className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-[100px] font-display font-black mb-12 leading-tight tracking-tighter">لا تنتظر <br />المستقبل، <span className="text-brand">اصنعه</span></h2>
          <p className="text-xl text-white/70 mb-16 max-w-2xl mx-auto leading-relaxed">انضم إلى مئات الأشخاص الذين بدأوا رحلتهم نحو الاستقلال المالي اليوم.</p>
          
          <div className="flex flex-col gap-8 justify-center items-center">
            <a 
              href="https://alfan.link/ramadandigital"
              target="_blank"
              className="premium-glow-button min-w-[240px] group"
            >
              <Sparkles className="w-5 h-5 text-brand fill-brand/20 group-hover:fill-brand transition-all duration-700" />
              <span>الكورس الشامل</span>
            </a>
            <a 
              href="https://drive.google.com/file/d/1MiPsAXfqCMFLc5rRn6kiCphXAar-2TH-/view?usp=drivesdk"
              target="_blank"
              className="neon-button-white min-w-[240px]"
            >
              الدليل المجاني
            </a>
            <a 
              href="https://t.me/ramadan_ao"
              target="_blank"
              className="neon-button-white min-w-[240px] border-brand/30 text-brand"
            >
              <Send className="w-5 h-5" />
              <span>المجتمع المجاني</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 [mask-image:radial-gradient(circle,black_40%,transparent_100%)]">
              <img src={profileImageUrl} alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">رمضان | تاجر رقمي</span>
          </div>
          
          <div className="flex gap-12 text-sm font-bold tracking-[0.2em] text-white/20">
            <span>© 2026 رمضان حلال</span>
            <a href={instagramUrl} target="_blank" className="hover:text-brand transition-colors">INSTAGRAM</a>
          </div>

          <div className="flex gap-6">
            <a href={instagramUrl} target="_blank" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-brand hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.a 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={instagramUrl}
          target="_blank"
          className="flex items-center justify-center w-16 h-16 bg-brand text-white rounded-2xl shadow-2xl shadow-brand/40 group relative border border-white/10"
        >
          <Instagram className="w-7 h-7" />
          <span className="absolute right-full mr-4 px-4 py-2 glass rounded-xl font-bold text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            تواصل معي
          </span>
        </motion.a>
      </div>
    </div>
  );
}
