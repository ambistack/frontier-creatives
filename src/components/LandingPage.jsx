'use client';

import { useState, useEffect, useRef } from 'react';
import GuidanceIcon from './GuidanceIcon';

const NumberTag = ({ children }) => (
  <span className="text-[11px] md:text-xs tracking-[0.22em] font-black text-brand-blue uppercase">
    {children}
  </span>
);

const Pill = ({ icon, children }) => (
  <div className="flex items-center gap-3 border border-brand-blue px-3 py-2 text-brand-blue uppercase tracking-[0.16em] text-[10px] md:text-xs font-black">
    <GuidanceIcon name={icon} className="w-6 h-6 shrink-0" />
    <span>{children}</span>
  </div>
);

const FLIP_FRAMES = ['Next session:', 'May 27th'];

const FlipPill = () => {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % FLIP_FRAMES.length);
        setExiting(false);
      }, 400);
    }, 3000);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="flex items-center gap-3 border border-brand-blue px-3 py-2 text-brand-blue uppercase tracking-[0.16em] text-[10px] md:text-xs font-black">
      <GuidanceIcon name="calendar" className="w-6 h-6 shrink-0" />
      <span className="relative overflow-hidden" style={{ width: '7.2em', height: '1.2em' }}>
        <span
          className={`absolute inset-x-0 ${exiting ? 'animate-slide-out' : 'animate-slide-in'}`}
        >
          {FLIP_FRAMES[index]}
        </span>
      </span>
    </div>
  );
};

const VideoStorySection = ({ eyebrow, title, body, cta, videoUrl, tall }) => (
  <section className="px-5 md:px-10 py-10 md:py-14 border-t border-brand-blue">
    <div className={`grid lg:grid-cols-12 gap-8 ${videoUrl ? 'items-start' : 'items-stretch'}`}>
      <div className="lg:col-span-8 flex flex-col justify-between min-h-[20rem] md:min-h-[34rem]">
        <div>
          <NumberTag>{eyebrow}</NumberTag>
          <h2 className="mt-5 text-[13vw] sm:text-[11vw] md:text-[19vw] lg:text-[10.5vw] leading-[0.74] tracking-[-0.105em] font-black lowercase">
            {title}
          </h2>
        </div>
        <p className="max-w-3xl text-xl sm:text-2xl md:text-4xl leading-[0.95] tracking-[-0.055em] font-black mt-8">
          {body}
        </p>
      </div>

      <div className={`lg:col-span-4 border border-brand-blue text-brand-blue flex flex-col ${videoUrl ? 'h-auto' : 'min-h-[24rem] md:min-h-[34rem]'}`}>
        {videoUrl ? (
          tall ? (
            <div className="relative w-full overflow-hidden" style={{ height: 'clamp(28rem, 60vw, 44rem)' }}>
              <iframe
                src={videoUrl}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: '180%', height: '100%' }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={typeof cta === 'string' ? cta : ''}
              />
            </div>
          ) : (
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={typeof cta === 'string' ? cta : ''}
              />
            </div>
          )
        ) : (
          <div className="flex-1 bg-brand-stone flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
            <GuidanceIcon name="recording" className="w-20 h-20 md:w-32 md:h-32" />
            <div className="mt-5 uppercase tracking-[0.18em] text-[10px] md:text-xs font-black">
              video embed placeholder
            </div>
            <div className="absolute inset-x-5 bottom-5 border-t border-brand-blue pt-3 flex justify-between uppercase tracking-[0.18em] text-[9px] font-black">
              <span>YouTube / Vimeo</span>
              <span>16:9</span>
            </div>
          </div>
        )}

        <button className="border-t border-brand-blue py-4 uppercase tracking-[0.2em] text-xs font-black hover:bg-brand-blue hover:text-brand-cream transition-colors">
          {cta} →
        </button>
      </div>
    </div>
  </section>
);

export default function LandingPage() {
  const principles = [
    { num: "01", icon: "eye", title: "observe", body: "Read the new creative stack before it becomes default behavior." },
    { num: "02", icon: "gallery", title: "compose", body: "Turn references, systems, and taste into usable visual language." },
    { num: "03", icon: "chat", title: "exchange", body: "Talk through process with people shipping work in public." },
    { num: "04", icon: "entry", title: "enter", body: "Leave with a workflow, prototype, or asset you can reuse." }
  ];

  return (
    <main className="min-h-screen bg-brand-cream text-black font-sans selection:bg-brand-blue selection:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="px-5 md:px-10 pt-6 md:pt-10 pb-8 min-h-screen flex flex-col">
        <header className="flex items-center justify-between border-b border-brand-blue pb-4 text-brand-blue">
          <div className="flex items-center gap-3 uppercase text-[10px] sm:text-xs tracking-[0.22em] font-black">
            <GuidanceIcon name="location" className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="hidden sm:inline">
              <a href="https://www.psl.com/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Pioneer Square Labs</a>
              {" "}• Seattle
            </span>
            <span className="sm:hidden">
              <a href="https://www.psl.com/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">PSL</a>
              {" "}• Seattle
            </span>
          </div>
          <div className="flex gap-1 sm:gap-2">
            <div className="hidden sm:flex gap-2">
              <FlipPill />
              <Pill icon="camera">motion</Pill>
              <Pill icon="meeting">new here?</Pill>
            </div>
            <div className="sm:hidden">
              <GuidanceIcon name="calendar" className="w-5 h-5" />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-4 md:gap-8 flex-1 items-center py-10">
          <div className="col-span-12 lg:col-span-9">
            <h1 className="text-[22vw] lg:text-[13.5vw] leading-[0.73] tracking-[-0.105em] font-black lowercase">
              frontier<br />creatives
            </h1>
          </div>
          <aside className="col-span-12 lg:col-span-3 text-brand-blue lg:self-stretch flex flex-col sm:flex-row lg:flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-brand-blue pt-6 lg:pt-0 lg:pl-8">
            <GuidanceIcon name="gallery" className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 shrink-0" />
            <div>
              <NumberTag>wayfinding for the new creative stack</NumberTag>
              <p className="mt-4 text-black text-xl sm:text-2xl md:text-4xl lg:text-3xl leading-[0.92] tracking-[-0.055em] font-black">
                A live room for designers, builders, and AI-native creatives.
              </p>
            </div>
          </aside>
        </div>

        <div className="grid md:grid-cols-12 gap-5 border-t border-brand-blue pt-5">
          <p className="md:col-span-7 text-xl sm:text-2xl md:text-5xl leading-[0.95] tracking-[-0.06em] font-black max-w-5xl">
            Learn what changed. See the workflow. Make the thing. Leave with evidence.
          </p>
          <div className="md:col-span-5 grid grid-cols-2 gap-2 content-start">
            <Pill icon="clock">10 min intro</Pill>
            <Pill icon="recording">lightning demos</Pill>
            <Pill icon="coffee">conversation</Pill>
            <Pill icon="card">invite only</Pill>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="px-5 md:px-10 py-8 border-t border-brand-blue">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-brand-blue">
          {principles.map((item, index) => (
            <article key={item.title} className={`min-h-60 sm:min-h-72 p-5 md:p-7 border-brand-blue flex flex-col justify-between ${
              index !== principles.length - 1 ? 'border-b sm:border-b-0 sm:border-r' : ''
            }`}>
              <div className="flex justify-between items-start text-brand-blue">
                <NumberTag>{item.num}</NumberTag>
                <GuidanceIcon name={item.icon} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
              </div>
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[0.8] tracking-[-0.08em] font-black lowercase">{item.title}</h2>
                <p className="mt-4 text-sm sm:text-base md:text-lg leading-tight max-w-xs">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Next Session */}
      <section className="px-5 md:px-10 py-10 md:py-16 border-t border-brand-blue">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <NumberTag>next session</NumberTag>
            <h2 className="mt-4 text-[14vw] sm:text-[14vw] md:text-[18vw] lg:text-[10vw] leading-[0.76] tracking-[-0.105em] font-black lowercase">
              ai motion<br />design lab
            </h2>
          </div>
          <div className="lg:col-span-5 border border-brand-blue p-5 md:p-7 min-h-[20rem] sm:min-h-96 flex flex-col justify-between">
            <div className="flex justify-between text-brand-blue">
              <GuidanceIcon name="calendar" className="w-14 h-14 sm:w-20 sm:h-20" />
              <GuidanceIcon name="museum" className="w-14 h-14 sm:w-20 sm:h-20" />
            </div>
            <div>
              <NumberTag>Pioneer Square Labs / Seattle</NumberTag>
              <p className="mt-5 text-2xl sm:text-3xl md:text-6xl leading-[0.9] tracking-[-0.07em] font-black">
                Build an explainer, steal the workflow, remix the system.
              </p>
              <button className="mt-8 w-full border border-brand-blue text-brand-blue py-4 uppercase tracking-[0.2em] text-xs font-black hover:bg-brand-blue hover:text-brand-cream transition-colors">
                Request invite →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Story Sections */}
      <VideoStorySection
        eyebrow="film 01 / orientation"
        title={<>who we<br />are.</>}
        body="A short introduction to Frontier Creatives: why the room exists, who it is for, and why creative professionals need a better place to learn together."
        cta="Watch intro"
        videoUrl="https://player.vimeo.com/video/1191281532"
        tall
      />

      <VideoStorySection
        eyebrow="film 02 / principles"
        title={<>what we<br />value.</>}
        body="A statement of taste and operating principles: curiosity, generosity, process transparency, craft, useful experimentation, and shipping real work."
        cta="Watch values"
        videoUrl="https://player.vimeo.com/video/1191272020"
        tall
      />

      <VideoStorySection
        eyebrow="film 03 / field notes"
        title={<>inside the<br />event.</>}
        body="A preview of the format: quick intro, lightning demos, live workflow breakdowns, open discussion, and room for people to meet through the work."
        cta="Watch format"
        videoUrl="https://player.vimeo.com/video/1191288057"
        tall
      />

      {/* Footer */}
      <footer className="px-5 md:px-10 py-7 border-t border-brand-blue">
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-5 text-brand-blue uppercase tracking-[0.18em] text-[10px] sm:text-xs font-black text-center sm:text-left">
          <span>Frontier Creatives</span>
          <span>Design / AI / Motion / Systems</span>
          <span>Seattle, Washington</span>
        </div>
      </footer>
    </main>
  );
}