'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/page-banner';
import {
  ShieldCheck,
  Heart,
  Activity,
  CheckCircle2,
  Building2,
  Phone,
  Calendar,
  Sparkles,
  BedDouble,
  Pill,
  Stethoscope,
  Users,
  Compass,
  Check,
  Lightbulb,
  HeartHandshake,
  ArrowRight,
  UserCheck,
  BookOpen,
  Award
} from 'lucide-react';
import { ScrollReveal, SectionHeadingReveal } from '@/components/ui/scroll-reveal';

function CounterNumber({ target, suffix, shouldStart }: { target: number; suffix: string; shouldStart: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    const duration = 2000;
    const easeOutQuad = (t: number) => t * (2 - t);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [target, shouldStart]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function AboutUsPage() {
  const statsRef = useRef<HTMLElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [hoveredCoreIndex, setHoveredCoreIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coreValues = [
    {
      letter: 'C',
      title: 'C – Care',
      desc: 'We believe everyone deserves more than just treatment – they deserve a healing experience. Our approach is always personal, always human, never just routine.',
      icon: <Heart className="w-6 h-6" />
    },
    {
      letter: 'C',
      title: 'C – Compassion',
      desc: "Healthcare can be overwhelming. That's why we go beyond the basics, ensuring every patient and their loved ones feel seen, heard, and supported every step of the way.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      letter: 'I',
      title: 'I – Integrity',
      desc: "Trust is everything. We uphold the highest standards in all we do, staying true to our mission to put patients first and always doing what's best for them.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      letter: 'L',
      title: 'L – Learning',
      desc: 'We’re committed to continuous growth. From breakthrough research to innovative methods, we evolve to provide better care and outcomes for everyone.',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      letter: 'R',
      title: 'R – Respect',
      desc: 'We treat every individual with the dignity they deserve, ensuring they feel valued and heard, both during treatment and beyond.',
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      letter: 'E',
      title: 'E – Excellence',
      desc: 'We bring unmatched expertise, using advanced technology and skilled professionals to tackle every health challenge with confidence and precision.',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const whyChooseItems = [
    {
      title: 'Comprehensive Care',
      desc: 'A full range of specialties and advanced treatments, all under one roof.',
      iconSrc: '/images/about/mind-map.png'
    },
    {
      title: 'Expert Medical Team',
      desc: 'Highly skilled doctors and specialists committed to providing personalized care.',
      iconSrc: '/images/about/medical-team.png'
    },
    {
      title: 'Patient-Centered Approach',
      desc: 'Tailored treatment plans with a focus on your health and well-being.',
      iconSrc: '/images/about/patient.png'
    },
    {
      title: 'Cutting-Edge Technology',
      desc: 'Using the latest medical advancements for accurate diagnoses and effective treatments.',
      iconSrc: '/images/about/cut.png'
    },
    {
      title: 'Seamless Experience',
      desc: 'Streamlined processes with easy appointment scheduling, minimal wait times, and ongoing support.',
      iconSrc: '/images/about/omnichannel.png'
    },
    {
      title: 'Community Commitment',
      desc: 'Affordable, accessible healthcare designed to improve health outcomes for all.',
      iconSrc: '/images/about/handshake.png'
    }
  ];

  const approaches = [
    {
      title: 'Expert Care',
      desc: 'At Medlix, we bring together a team of the most skilled and dedicated clinical professionals, each committed to providing exceptional care. With their deep expertise and compassionate approach, our healthcare experts ensure that every patient receives the best possible treatment tailored to their needs.',
      image: '/images/about/expert-care.jpg',
      badge: '01'
    },
    {
      title: 'Advanced, Accessible Healthcare',
      desc: 'We combine the latest medical advancements with a commitment to affordability, making world-class healthcare accessible to all. Our goal is to ensure that cutting-edge treatments and technologies are available to everyone, without financial barriers.',
      image: '/images/about/advanced-accessible-healthcare.jpg',
      badge: '02'
    },
    {
      title: 'Care-Focused Systems',
      desc: 'Our healthcare systems are designed with you in mind. We’ve crafted streamlined processes that enhance efficiency while ensuring a patient-centered experience. From appointment scheduling to treatment and recovery, every step is made simpler, faster, and more reliable.',
      image: '/images/about/care-focused-systems.jpg',
      badge: '03'
    },
    {
      title: 'Patient-Centered Approach',
      desc: 'Our “patient-first” approach goes beyond just offering medical services—it’s about creating an experience that supports your overall well-being. We prioritize building trust, ensuring clear communication, and treating every patient as an individual, with care and respect at every stage of their journey.',
      image: '/images/about/patient-centered-approach.jpg',
      badge: '04'
    }
  ];

  return (
    <div className="w-full flex flex-col scroll-smooth">
      {/* 1. Page Hero Banner */}
      <PageBanner
        title="About Us"
        subtitle="Medlix Hospitals, founded in 2024 by Dr. Yogesh Sharma. Where care meets clinical excellence."
        badge="Healing With Compassion"
        breadcrumbs={[{ label: 'About Us' }]}
        imageSrc="/images/page-banner.jpg"
      />

      {/* Quick Jump Anchor Tabs */}
      <div className="sticky top-[72px] lg:top-[88px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto py-3 no-scrollbar text-xs sm:text-sm font-bold font-exo text-slate-600">
            <a href="#overview" className="hover:text-[#196062] whitespace-nowrap px-3 py-1.5 rounded-lg hover:bg-teal-50 transition-colors">
              Company Overview
            </a>
            <span className="text-slate-300">•</span>
            <a href="#vision-mission" className="hover:text-[#196062] whitespace-nowrap px-3 py-1.5 rounded-lg hover:bg-teal-50 transition-colors">
              Vision &amp; Mission
            </a>
            <span className="text-slate-300">•</span>
            <a href="#ourcore" className="text-[#196062] bg-teal-50/80 border border-teal-200/80 whitespace-nowrap px-3 py-1.5 rounded-lg hover:bg-teal-100 transition-colors">
              Our Core Values
            </a>
            <span className="text-slate-300">•</span>
            <a href="#whychoose" className="hover:text-[#196062] whitespace-nowrap px-3 py-1.5 rounded-lg hover:bg-teal-50 transition-colors">
              Why Choose Us
            </a>
            <span className="text-slate-300">•</span>
            <a href="#approach" className="hover:text-[#196062] whitespace-nowrap px-3 py-1.5 rounded-lg hover:bg-teal-50 transition-colors">
              Medlix Approach
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Narrative & Overview Section */}
      <section id="overview" className="py-20 lg:py-24 bg-white scroll-mt-28 relative overflow-hidden">
        {/* Subtle decorative background gradient circles */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#DFF8F8]/40 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left" duration={0.7}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200/80 bg-white group">
                  <Image
                    src="/images/about/video-popup-bg.png"
                    alt="Medlix at a Glance"
                    width={640}
                    height={580}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -right-3 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#C4DFDF] flex items-center gap-4 max-w-[320px] transition-transform duration-300 hover:scale-105">
                  <div className="w-12 h-12 rounded-xl bg-[#0A5F6B] text-white flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-[#29363A] font-exo leading-tight">NABH Aligned Standards</div>
                    <div className="text-xs text-[#719497] font-roboto mt-0.5">Continuous clinical quality monitoring</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="up" duration={0.65}>
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-flex items-center gap-1.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#0A5F6B] animate-pulse" />
                    About Medlix
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#29363A] font-exo tracking-tight leading-[1.2]">
                    Medlix at a Glance: Where Care Meets Excellence
                  </h2>
                  <div className="w-20 h-1.5 rounded-full bg-[#0A5F6B]" />
                </div>
              </ScrollReveal>

              <div className="space-y-4 text-[#719497] text-sm sm:text-base leading-relaxed font-roboto">
                <p className="font-medium text-[#29363A]">
                  <strong className="text-[#0A5F6B] font-semibold">Medlix Hospitals</strong>, founded in 2024 by <strong className="text-[#29363A] font-semibold">Dr. Yogesh Sharma</strong>. We’re a next-gen multispecialty hospital chain on a mission to make affordable, high-quality healthcare accessible to everyone, everywhere.
                </p>

                <p>
                  Our philosophy is simple: <strong className="text-[#29363A] font-semibold">Healthcare that’s built around patients.</strong> We’re here to deliver expert care that’s not only effective but also personal, treating every patient with respect, compassion, and individual attention. Whether you’re here for a check-up or a major procedure, you’re in skilled hands.
                </p>
              </div>

              {/* Two Feature Highlights from Live Website */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-6 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] shadow-xs hover:shadow-md transition-all space-y-2 group">
                  <div className="flex items-center gap-2 text-[#0A5F6B] font-bold font-exo text-sm">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0A5F6B] group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors">
                      <Heart className="w-4 h-4 text-[#0A5F6B]" />
                    </div>
                    <span>Empathetic Healing</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed">
                    At Medlix, we believe that healthcare should be about more than just treating illness—it’s about helping people live healthier and happier. We’re focused on breaking down barriers to make healthcare more inclusive, accessible, straightforward, and convenient, so you can feel confident and supported from the moment you step in to any of the Medlix Hospitals.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] shadow-xs hover:shadow-md transition-all space-y-2 group">
                  <div className="flex items-center gap-2 text-[#0A5F6B] font-bold font-exo text-sm">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0A5F6B] group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4 text-[#0A5F6B]" />
                    </div>
                    <span>Cost-Effective Quality</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed">
                    As we grow, we’re focused on making top-notch healthcare affordable and accessible to everyone. Through smart partnerships, efficient processes, and cutting-edge tech, we’re committed to keeping our care high-quality and cost-effective. Every new hospital under Medlix Hospitals is built with these values in mind.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-appointment"
                  className="px-7 py-3.5 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </Link>

                <Link
                  href="/locations"
                  className="px-7 py-3.5 bg-slate-100 hover:bg-slate-200/90 text-[#29363A] font-bold text-sm rounded-xl transition-all border border-[#C4DFDF] hover:-translate-y-0.5"
                >
                  Explore Our 8 Hospitals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats & Impact Counters Section */}
      <section 
        ref={statsRef}
        className="relative py-24 bg-cover bg-center overflow-hidden text-white"
        style={{ backgroundImage: "url('/images/home-3-counter-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[3px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {/* Stat 1 */}
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0A5F6B] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8" />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold font-exo tracking-tight mt-4 text-white">
                <CounterNumber target={8} suffix="+" shouldStart={statsVisible} />
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-200 font-exo mt-1">
                Independent Hospitals
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0A5F6B] flex items-center justify-center text-white shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                <BedDouble className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold font-exo tracking-tight mt-4 text-white">
                <CounterNumber target={500} suffix="+" shouldStart={statsVisible} />
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-200 font-exo mt-1">
                Hospital Beds
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0A5F6B] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Pill className="w-8 h-8" />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold font-exo tracking-tight mt-4 text-white">
                <CounterNumber target={25} suffix="+" shouldStart={statsVisible} />
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-200 font-exo mt-1">
                Medical Specialties
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0A5F6B] flex items-center justify-center text-white shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold font-exo tracking-tight mt-4 text-white">
                <CounterNumber target={50} suffix="+" shouldStart={statsVisible} />
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-200 font-exo mt-1">
                Specialist Doctors
              </p>
            </div>
          </div>

          {/* Subtext description from medlix.in */}
          <div className="mt-12 max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-xl">
            <p className="text-sm sm:text-base text-slate-100 font-roboto leading-relaxed">
              With a team of expert doctors, the latest tech, and a community-focused approach, we’re raising the bar for healthcare across India. Our facilities are equipped to handle everything from daily health needs to specialized treatments. Join us in creating a future where healthcare is affordable, accessible, and available to all.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission Section (#vision-mission) */}
      <section id="vision-mission" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingReveal
            badge={
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
                Our Compass
              </span>
            }
            title="Mission & Vision"
            subtitle="Empowering communities with compassionate care, clinical innovation, and affordable medical access."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Our Drive (Mission) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#C4DFDF] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#DFF8F8] flex items-center justify-center text-[#0A5F6B] mb-6 group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors duration-300 shadow-xs">
                  <Compass className="w-7 h-7" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#29363A] font-exo mb-4 leading-snug">
                  Our Drive: Healthcare - Affordable, Accessible, Available for all
                </h3>

                <ul className="space-y-4 pt-2 text-[#719497] text-sm sm:text-base font-roboto">
                  <li className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-2xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-[#29363A] font-exo">Care That Understands:</strong> We’re here to listen, understand, and provide personalized care that makes you feel truly seen and heard.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-2xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-[#29363A] font-exo">Health Made Simple:</strong> We bring advanced treatments and the latest medical tech directly to you, making healthcare easier and more accessible.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-2xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-[#29363A] font-exo">Stronger Together:</strong> We believe in healthier individuals leading to stronger communities, and we’re here to support that every step of the way.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">
                <span>Our Driving Purpose</span>
              </div>
            </div>

            {/* Vision Forward */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#C4DFDF] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#DFF8F8] flex items-center justify-center text-[#0A5F6B] mb-6 group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors duration-300 shadow-xs">
                  <Lightbulb className="w-7 h-7" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#29363A] font-exo mb-4 leading-snug">
                  Vision Forward: Healthcare Reimagined
                </h3>

                <ul className="space-y-4 pt-2 text-[#719497] text-sm sm:text-base font-roboto">
                  <li className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-2xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-[#29363A] font-exo">Healthcare on Your Terms:</strong> A future where you can access expert care anytime, anywhere – with no barriers and no waiting.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-2xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-[#29363A] font-exo">Healing with Heart:</strong> Leading medical innovation while always remembering that healing starts with human connection.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-2xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-[#29363A] font-exo">Your Wellness, Our Purpose:</strong> We’re here to be the go-to health partner that helps you live your healthiest, happiest life.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">
                <span>The Future We Are Building</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The CIRCLE of Care: Our Core Values (#ourcore) */}
      <section id="ourcore" className="py-20 lg:py-24 bg-[#DFF8F8]/40 border-b border-slate-200/80 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingReveal
            badge={
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-white px-3.5 py-1.5 rounded-full border border-[#C4DFDF] shadow-2xs font-exo inline-block">
                Guiding Principles
              </span>
            }
            title="The CIRCLE of Care: Our Core Values"
            subtitle="Six foundational values that define every interaction and patient touchpoint across all Medlix Hospitals."
            className="mb-16"
          />

          {/* Central Infographic showcase + 6 Interactive Value Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Center Graphic from Medlix */}
            <div className="lg:col-span-4 order-last lg:order-none flex flex-col items-center justify-center">
              <div className="relative p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-[#C4DFDF] shadow-xl max-w-xs sm:max-w-sm text-center group hover:shadow-2xl transition-all">
                <Image
                  src="/images/about/6-infograhic-bg.png"
                  alt="CIRCLE of Care Infographic"
                  width={340}
                  height={340}
                  className="w-full h-auto object-contain mx-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-extrabold text-[#0A5F6B] font-exo uppercase tracking-widest block">
                    C • I • R • C • L • E
                  </span>
                  <p className="text-xs text-[#719497] font-roboto mt-1">
                    Care • Integrity • Respect • Compassion • Learning • Excellence
                  </p>
                </div>
              </div>
            </div>

            {/* 6 Value Cards Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {coreValues.map((val, idx) => {
                const isHovered = hoveredCoreIndex === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredCoreIndex(idx)}
                    className={`relative rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group overflow-hidden cursor-pointer ${
                      isHovered
                        ? 'bg-gradient-to-br from-[#07515C] to-[#0A5F6B] text-white border-transparent shadow-2xl -translate-y-1.5'
                        : 'bg-white text-[#29363A] border-[#C4DFDF] shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* Top Letter & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span 
                          className={`w-12 h-12 rounded-2xl font-black text-xl flex items-center justify-center transition-all ${
                            isHovered 
                              ? 'bg-white text-[#0A5F6B] shadow-md' 
                              : 'bg-[#DFF8F8] text-[#0A5F6B] border border-[#C4DFDF] font-exo'
                          }`}
                        >
                          {val.letter}
                        </span>

                        <div className={isHovered ? 'text-white' : 'text-[#0A5F6B]'}>
                          {val.icon}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl font-bold font-exo mb-2 transition-colors ${
                        isHovered ? 'text-white' : 'text-[#29363A]'
                      }`}>
                        {val.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-sm font-roboto leading-relaxed transition-colors ${
                        isHovered ? 'text-white/95' : 'text-[#719497]'
                      }`}>
                        {val.desc}
                      </p>
                    </div>

                    <div className={`mt-5 pt-3 border-t flex items-center gap-2 text-xs font-semibold ${
                      isHovered ? 'border-white/20 text-white' : 'border-slate-100 text-[#0A5F6B]'
                    }`}>
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="font-exo tracking-wide uppercase text-[10px]">
                        Core Commitment
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Medlix Hospital (#whychoose) */}
      <section id="whychoose" className="py-20 lg:py-24 bg-white border-b border-slate-100 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingReveal
            badge={
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0A5F6B]" />
                <span>Healthcare Excellence</span>
              </div>
            }
            title="Why Choose Medlix Hospital"
            subtitle="Delivering comprehensive, patient-centered care with state-of-the-art medical technology and top specialists."
            className="mb-16"
          />

          {/* 3x2 Grid matching Elementor padded cards with original icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 sm:p-9 shadow-[0_15px_30px_0_rgba(0,0,0,0.06)] border border-[#C4DFDF] hover:shadow-[0_20px_40px_0_rgba(0,0,0,0.12)] hover:border-[#0A5F6B] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div>
                  {/* Icon Header with downloaded PNG */}
                  <div className="w-16 h-16 rounded-2xl bg-[#DFF8F8] group-hover:bg-[#0A5F6B] transition-colors duration-300 flex items-center justify-center mb-6 shadow-xs p-3">
                    <Image
                      src={item.iconSrc}
                      alt={item.title}
                      width={44}
                      height={44}
                      className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>

                  {/* Title in Exo font */}
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#29363A] font-exo group-hover:text-[#0A5F6B] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description in Roboto */}
                  <p className="text-sm sm:text-base text-[#719497] font-roboto leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Brand Accent */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-1 rounded-full bg-[#0A5F6B]" />
                  <span className="text-[11px] font-bold text-[#719497] uppercase tracking-widest font-exo">
                    Medlix Pillar 0{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. The Medlix Approach (#approach) */}
      <section id="approach" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingReveal
            badge={
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
                Clinical Methodology
              </span>
            }
            title="The Medlix Approach"
            subtitle="How our hospital systems ensure safety, clinical superiority, and seamless healing."
            className="mb-16"
          />

          {/* 2x2 Grid with real photos matching medlix.in */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((app, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#C4DFDF] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group hover:border-[#0A5F6B] hover:-translate-y-1.5"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#0A5F6B] font-exo shadow-sm border border-slate-100">
                    {app.badge}
                  </div>
                </div>

                <div className="p-8 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#29363A] font-exo group-hover:text-[#0A5F6B] transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-[#719497] text-sm sm:text-base font-roboto leading-relaxed">
                      {app.desc}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0A5F6B] group-hover:text-[#07515C] transition-colors">
                    <span>Clinical Excellence Guaranteed</span>
                    <span>✓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Direct Helpline & Emergency Consultation Callout */}
      <section className="py-16 bg-gradient-to-r from-[#07515C] to-[#0A5F6B] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9F5F3] bg-white/10 px-3 py-1 rounded-full font-exo inline-block">
              24/7 Medical Care
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-exo">
              Need Medical Guidance or Emergency Support?
            </h3>
            <p className="text-sm sm:text-base text-teal-100 font-roboto max-w-xl">
              Our 24x7 patient care coordinators are standing by across all 8 Medlix Hospital branches.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919220143473"
              className="px-7 py-3.5 bg-[#0A5F6B] hover:bg-[#07515C] border border-[#C9F5F3]/30 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all flex items-center gap-2.5 shrink-0 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-5 h-5" />
              <span>+91-9220143473</span>
            </a>

            <Link
              href="/contact-us"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base rounded-xl border border-white/25 transition-all shrink-0 hover:-translate-y-0.5"
            >
              Contact Nearest Branch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
