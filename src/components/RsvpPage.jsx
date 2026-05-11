'use client';

import { useState } from 'react';
import GuidanceIcon from './GuidanceIcon';

// ——— Reused Design System Primitives ———

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

// ——— Form Primitives ———

const Label = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="block text-[13px] md:text-sm tracking-[0.12em] font-black text-brand-blue uppercase mb-3"
  >
    {children}
  </label>
);

const TextInput = ({ id, name, value, onChange, placeholder, required, type = 'text' }) => (
  <input
    id={id}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className="w-full border-0 border-b border-brand-blue bg-transparent pb-3 pt-1 text-xl sm:text-2xl md:text-4xl font-black tracking-[-0.03em] placeholder:text-black/20 focus:outline-none focus:border-brand-blue focus:ring-0 transition-colors"
  />
);

const TextArea = ({ id, name, value, onChange, placeholder, required, rows = 3 }) => (
  <textarea
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    rows={rows}
    className="w-full border border-brand-blue bg-transparent p-4 md:p-5 text-lg sm:text-xl md:text-2xl font-black tracking-[-0.03em] placeholder:text-black/20 focus:outline-none focus:ring-0 resize-none transition-colors"
  />
);

const SelectablePill = ({ children, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`border px-4 py-3 text-left text-sm md:text-base font-black tracking-[-0.02em] transition-all ${
      selected
        ? 'border-brand-blue bg-brand-blue text-brand-cream'
        : 'border-brand-blue text-brand-blue hover:bg-brand-blue/5'
    }`}
  >
    {children}
  </button>
);

const SegmentSelector = ({ name, options, value, onChange }) => (
  <div className="inline-flex border border-brand-blue">
    {options.map((option) => (
      <button
        key={option.value}
        type="button"
        onClick={() => onChange({ target: { name, value: option.value } })}
        className={`px-4 py-3 text-sm md:text-base font-black tracking-[-0.02em] uppercase transition-all border-r border-brand-blue last:border-r-0 ${
          value === option.value
            ? 'bg-brand-blue text-brand-cream'
            : 'text-brand-blue hover:bg-brand-blue/5'
        }`}
      >
        {option.label}
      </button>
    ))}
  </div>
);

// ——— Values data ———

const VALUES = [
  'signal over noise',
  'respect for the mic',
  'radical openness',
  'courageous showing',
  'growth-minded kindness',
  'human sovereignty',
];

// ——— Role options ———

const ROLE_OPTIONS = [
  'Product Designer',
  'UX/UI Designer',
  'Frontend Engineer',
  'Creative Technologist',
  'Founder',
  'Student',
  'Product Manager',
  'Artist / Creative',
  'AI Engineer / Research',
  'Other',
];

// ——— Event detail pills ———

const EVENT_DETAILS = [
  { icon: 'location', label: 'Pioneer Square Labs • Seattle' },
  { icon: 'calendar', label: 'Monthly gatherings' },
  { icon: 'recording', label: 'Lightning demos' },
  { icon: 'coffee', label: 'Workflow breakdowns' },
  { icon: 'chat', label: 'Conversation' },
  { icon: 'card', label: 'Invite requested / curated' },
];

export default function RsvpPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    link: '',
    role: [],
    aiTools: '',
    building: '',
    hopes: '',
    presentation: '',
    heardFrom: '',
    situation: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleRole = (role) => {
    setForm((prev) => ({
      ...prev,
      role: prev.role.includes(role)
        ? prev.role.filter((r) => r !== role)
        : [...prev.role, role],
    }));
  };

  const GOOGLE_FORM_ID = '1PcokaTU6DN_-VEtIK9ibeKniUuoOf7YtBkvHN-EZUW0';

  const ENTRY_IDS = {
    fullName:     'entry.2023085978',
    email:        'entry.1996128041',
    link:         'entry.1468278510',
    role:         'entry.464828348',
    aiTools:      'entry.632376268',
    building:     'entry.840674314',
    hopes:        'entry.283705538',
    presentation: 'entry.1452363108',
    heardFrom:    'entry.1032852867',
    situation:    'entry.252203705',
  };

  const PRESENTATION_GOOGLE_MAP = {
    'yes':      'Yes',
    'maybe':    'Maybe',
    'not-yet':  'Not yet',
  };

  const SITUATION_GOOGLE_MAP = {
    'employed':   'Full-time employed',
    'freelance':  'Freelance / independent',
    'founder':    'Founder / building something',
    'student':    'Student',
    'exploring':  'Exploring new opportunities',
    'other':      'Other',
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const body = new URLSearchParams();
    body.append(ENTRY_IDS.fullName, form.fullName);
    body.append(ENTRY_IDS.email, form.email);
    body.append(ENTRY_IDS.link, form.link);

    // Checkboxes — append each selected role as a separate entry with the same key
    form.role.forEach((role) => {
      body.append(ENTRY_IDS.role, role);
    });

    body.append(ENTRY_IDS.aiTools, form.aiTools);
    body.append(ENTRY_IDS.building, form.building);
    body.append(ENTRY_IDS.hopes, form.hopes);
    body.append(ENTRY_IDS.presentation, PRESENTATION_GOOGLE_MAP[form.presentation] || '');
    body.append(ENTRY_IDS.heardFrom, form.heardFrom);
    body.append(ENTRY_IDS.situation, SITUATION_GOOGLE_MAP[form.situation] || '');

    try {
      await fetch(
        `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`,
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        }
      );
    } catch (_) {
      // no-cors mode suppresses errors — submission succeeds silently
    }

    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-brand-cream text-black font-sans selection:bg-brand-blue selection:text-white overflow-hidden">
      {/* ——— SECTION 1 — HERO ——— */}
      <section className="px-5 md:px-10 pt-6 md:pt-10 pb-8 min-h-screen flex flex-col">
        <header className="flex items-center justify-between border-b border-brand-blue pb-4 text-brand-blue">
          <div className="flex items-center gap-3 uppercase text-[10px] sm:text-xs tracking-[0.22em] font-black">
            <GuidanceIcon name="location" className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="hidden sm:inline">
              <a href="https://www.psl.com/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Pioneer Square Labs</a>
              {' '}• Seattle
            </span>
            <span className="sm:hidden">
              <a href="https://www.psl.com/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">PSL</a>
              {' '}• Seattle
            </span>
          </div>
          <a href="/" className="text-[10px] sm:text-xs tracking-[0.22em] font-black uppercase hover:underline underline-offset-4">
            ← Home
          </a>
        </header>

        <div className="grid grid-cols-12 gap-4 md:gap-8 flex-1 items-center py-10">
          <div className="col-span-12 lg:col-span-9">
            <h1 className="text-[22vw] lg:text-[13.5vw] leading-[0.73] tracking-[-0.105em] font-black lowercase">
              request<br />an invite.
            </h1>
          </div>
          <aside className="col-span-12 lg:col-span-3 text-brand-blue lg:self-stretch flex flex-col sm:flex-row lg:flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-brand-blue pt-6 lg:pt-0 lg:pl-8">
            <GuidanceIcon name="entry" className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 shrink-0" />
            <div>
              <NumberTag>curated attendance</NumberTag>
              <div className="mt-5 grid grid-cols-1 gap-2">
                {EVENT_DETAILS.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-center gap-3 text-brand-blue uppercase tracking-[0.16em] text-[10px] md:text-xs font-black"
                  >
                    <GuidanceIcon name={detail.icon} className="w-5 h-5 shrink-0" />
                    <span>{detail.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="grid md:grid-cols-12 gap-5 border-t border-brand-blue pt-5">
          <p className="md:col-span-12 text-xl sm:text-2xl md:text-4xl leading-[0.95] tracking-[-0.06em] font-black max-w-5xl">
            Frontier Creatives is a high-signal gathering for designers, engineers, creative technologists, founders, and AI-native builders exploring the future of digital work.
          </p>
        </div>
      </section>

      {/* ——— SECTION 2 — RSVP INTRO ——— */}
      <section className="px-5 md:px-10 py-10 md:py-14 border-t border-brand-blue">
        <div className="max-w-4xl">
          <NumberTag>about the rsvp</NumberTag>
          <p className="mt-6 text-3xl sm:text-4xl md:text-7xl leading-[0.88] tracking-[-0.07em] font-black lowercase">
            We&rsquo;re intentionally building a thoughtful room.
          </p>
          <div className="mt-8 border-t border-brand-blue/30 pt-8">
            <p className="text-lg sm:text-xl md:text-2xl leading-[1.15] tracking-[-0.03em] font-black max-w-3xl text-black/70">
              The RSVP process helps us understand who&rsquo;s attending, what people are exploring, and how we can create the best possible experience for everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* ——— SECTION 3 — RSVP FORM ——— */}
      <section className="px-5 md:px-10 py-10 md:py-14 border-t border-brand-blue">
        <NumberTag>the form</NumberTag>
        <h2 className="mt-4 text-[12vw] md:text-[8vw] leading-[0.78] tracking-[-0.105em] font-black lowercase">
          tell us<br />about you.
        </h2>

        {submitted ? (
          <div className="mt-12 border border-brand-blue p-8 md:p-14 min-h-[20rem] flex flex-col items-center justify-center text-center">
            <GuidanceIcon name="entry" className="w-24 h-24 md:w-32 md:h-32 text-brand-blue" />
            <p className="mt-6 text-3xl sm:text-4xl md:text-6xl leading-[0.9] tracking-[-0.07em] font-black">
              Request received.<br />Thank you.
            </p>
            <p className="mt-5 text-lg sm:text-xl font-black tracking-[-0.03em] text-black/60 max-w-lg">
              We review every submission personally. You&rsquo;ll hear from us soon.
            </p>
            <a
              href="/"
              className="mt-8 inline-block border border-brand-blue text-brand-blue px-8 py-4 uppercase tracking-[0.2em] text-xs font-black hover:bg-brand-blue hover:text-brand-cream transition-colors"
            >
              ← Return home
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-14 md:space-y-20 max-w-4xl">
            {/* Field 1 — Full Name */}
            <div>
              <Label htmlFor="fullName">
                <span className="text-brand-blue text-[10px] md:text-[11px] tracking-[0.22em] mr-4">01</span>
                Full Name
              </Label>
              <TextInput
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            {/* Field 2 — Email */}
            <div>
              <Label htmlFor="email">
                <span className="text-brand-blue text-[10px] md:text-[11px] tracking-[0.22em] mr-4">02</span>
                Email Address
              </Label>
              <TextInput
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Field 3 — LinkedIn / Portfolio */}
            <div>
              <Label htmlFor="link">
                <span className="text-brand-blue text-[10px] md:text-[11px] tracking-[0.22em] mr-4">03</span>
                LinkedIn / Portfolio / Website
                <span className="text-black/30 ml-2 font-normal tracking-normal lowercase">optional</span>
              </Label>
              <TextInput
                id="link"
                name="link"
                value={form.link}
                onChange={handleChange}
                placeholder="url that represents you"
              />
            </div>

            {/* Field 4 — Role */}
            <div>
              <p className="block text-[13px] md:text-sm tracking-[0.12em] font-black text-brand-blue uppercase mb-3">
                <span className="text-brand-blue text-[10px] md:text-[11px] tracking-[0.22em] mr-4">04</span>
                What best describes you right now?
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {ROLE_OPTIONS.map((role) => (
                  <SelectablePill
                    key={role}
                    selected={form.role.includes(role)}
                    onClick={() => toggleRole(role)}
                  >
                    {role}
                  </SelectablePill>
                ))}
              </div>
            </div>

            {/* Field 5 — AI Tools */}
            <div>
              <Label htmlFor="aiTools">
                <span className="text-brand-blue text-[10px] md:text-[11px] tracking-[0.22em] mr-4">05</span>
                What AI tools or workflows are you currently exploring?
              </Label>
              <TextArea
                id="aiTools"
                name="aiTools"
                value={form.aiTools}
                onChange={handleChange}
                placeholder="Describe the tools, platforms, or workflows..."
                required
              />
            </div>

            {/* Field 6 — Building */}
            <div>
              <Label htmlFor="building">
                <span className="text-brand-blue text-[10px] md:text-[11px] tracking-[0.22em] mr-4">06</span>
                What are you currently building, experimenting with, or thinking about?
              </Label>
              <TextArea
                id="building"
                name="building"
                value={form.building}
                onChange={handleChange}
                placeholder="Projects, experiments, ideas..."
                required
              />
            </div>

            {/* Field 7 — Hopes */}
            <div>
              <Label htmlFor="hopes">
                <span className="text-brand-blue text-[10px] md:text-[11px] tracking-[0.22em] mr-4">07</span>
                What are you hoping to get out of Frontier Creatives?
              </Label>
              <TextArea
                id="hopes"
                name="hopes"
                value={form.hopes}
                onChange={handleChange}
                placeholder="What would make this valuable for you?"
                required
              />
            </div>

            {/* Field 8 — Lightning round */}
            <div>
              <p className="block text-[13px] md:text-sm tracking-[0.12em] font-black text-brand-blue uppercase mb-3">
                <span className="text-brand-blue text-[10px] md:text-[11px] tracking-[0.22em] mr-4">08</span>
                Would you be open to presenting a lightning round in the future?
              </p>
              <SegmentSelector
                name="presentation"
                value={form.presentation}
                onChange={handleChange}
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'maybe', label: 'Maybe' },
                  { value: 'not-yet', label: 'Not yet' },
                ]}
              />
            </div>

            {/* Field 9 — Heard from */}
            <div>
              <Label htmlFor="heardFrom">
                <span className="text-brand-blue text-[10px] md:text-[11px] tracking-[0.22em] mr-4">09</span>
                How did you hear about us?
                <span className="text-black/30 ml-2 font-normal tracking-normal lowercase">optional</span>
              </Label>
              <TextInput
                id="heardFrom"
                name="heardFrom"
                value={form.heardFrom}
                onChange={handleChange}
                placeholder="Friend, Twitter, LinkedIn, event..."
              />
            </div>

            {/* Field 10 — Situation */}
            <div>
              <p className="block text-[13px] md:text-sm tracking-[0.12em] font-black text-brand-blue uppercase mb-3">
                <span className="text-brand-blue text-[10px] md:text-[11px] tracking-[0.22em] mr-4">10</span>
                What best describes your current situation?
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: 'employed', label: 'Full-time employed' },
                  { value: 'freelance', label: 'Freelance / independent' },
                  { value: 'founder', label: 'Founder / building something' },
                  { value: 'student', label: 'Student' },
                  { value: 'exploring', label: 'Exploring new opportunities' },
                  { value: 'other', label: 'Other' },
                ].map((option) => (
                  <SelectablePill
                    key={option.value}
                    selected={form.situation === option.value}
                    onClick={() => setForm((prev) => ({ ...prev, situation: option.value }))}
                  >
                    {option.label}
                  </SelectablePill>
                ))}
              </div>
            </div>
          </form>
        )}
      </section>

      {/* ——— SECTION 4 — VALUES STRIP ——— */}
      <section className="px-5 md:px-10 py-10 md:py-14 border-t border-brand-blue">
        <NumberTag>what we value</NumberTag>
        <div className="mt-6 flex flex-wrap gap-3">
          {VALUES.map((value) => (
            <div
              key={value}
              className="border border-brand-blue px-5 py-3 text-brand-blue text-lg sm:text-xl md:text-2xl font-black lowercase tracking-[-0.03em] hover:bg-brand-blue hover:text-brand-cream transition-colors cursor-default select-none"
            >
              {value}
            </div>
          ))}
        </div>
      </section>

      {/* ——— SECTION 5 — SUBMIT CTA ——— */}
      <section className="px-5 md:px-10 py-10 md:py-16 border-t border-brand-blue">
        <div className="max-w-3xl">
          <NumberTag>ready?</NumberTag>
          <p className="mt-4 text-[12vw] md:text-[8vw] leading-[0.78] tracking-[-0.105em] font-black lowercase">
            join the room.
          </p>
          {!submitted && (
            <>
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-8 border border-brand-blue text-brand-blue px-10 py-5 uppercase tracking-[0.2em] text-xs sm:text-sm font-black hover:bg-brand-blue hover:text-brand-cream transition-colors"
              >
                Request Invite →
              </button>
              <p className="mt-5 text-base sm:text-lg tracking-[-0.02em] font-black text-black/50 max-w-lg leading-[1.15]">
                Attendance is intentionally curated to preserve a thoughtful, high-signal environment.
              </p>
            </>
          )}
          {submitted && (
            <p className="mt-6 text-lg sm:text-xl tracking-[-0.02em] font-black text-brand-blue">
              We&rsquo;ll be in touch.
            </p>
          )}
        </div>
      </section>

      {/* ——— SECTION 6 — FOOTER ——— */}
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