import React, { useState } from 'react'
import { EXPERIENCES } from '../data';
import FadeInItem from './FadeInItem';
import { BiRightArrow } from 'react-icons/bi';

function Experience() {
    const [active, setActive] = useState(EXPERIENCES[0].id);
    const current = EXPERIENCES.find(e => e.id === active)!;

    const activeIdx = EXPERIENCES.findIndex((e) => e.id === active);
    const ROW_H = 40; // matches h-10 (10 * 4px)

    return (
        <section id="experience" className="reveal mx-5 mt-40">
            <h1 className="text-4xl font-bold">Experience</h1>
            <div className="flex">
                <p className="whitespace-nowrap text-zinc-700 dark:text-slate-300">The journey so far</p>
                <hr className="w-full my-auto ml-2 border border-gray-300 dark:border-gray-600"/>
            </div>
            {/* Layout wrapper: column on mobile, 2-col on md+ */}
            <div className="pt-14 md:grid md:grid-cols-[220px,1fr] md:gap-6">

                {/* Mobile: numbered pills row */}
                <div className="mb-4 md:hidden">
                    <ul className="flex gap-2 overflow-x-auto">
                        {EXPERIENCES.map((exp, idx) => {
                            const selected = exp.id === active;
                            return (
                                <li key={exp.id}>
                                    <button
                                        onClick={() => setActive(exp.id)}
                                        aria-pressed={selected}
                                        aria-label={`${idx + 1}: ${exp.company}`}
                                        className={[
                                        "h-9 w-9 rounded-full text-sm font-medium flex items-center justify-center shrink-0",
                                        selected
                                            ? "bg-blue-600 text-white"
                                            : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600"
                                        ].join(" ")}
                                    >
                                        {idx + 1}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    {/* Optional legend under numbers */}
                    <div className="mt-2 text-blue-600 dark:text-blue-500">
                        {EXPERIENCES.map((exp, idx) =>
                        exp.id === active ? <span key={exp.id}>{idx + 1}. {exp.company}</span> : null
                        )}
                    </div>
                </div>


                {/* Desktop: company list in a left sidebar */}
                <aside className="hidden md:block">
                    <div className="relative pr-4">
                        {/* Sliding indicator on the right */}
                        <span
                        aria-hidden
                        className="absolute right-0 top-0 w-[2px] rounded bg-blue-600 dark:bg-blue-500
                                    transition-transform duration-300"
                        style={{
                            height: `${ROW_H}px`,
                            transform: `translateY(${activeIdx * ROW_H}px)`,
                        }}
                        />

                        <ul className="flex flex-col">
                        {EXPERIENCES.map((exp) => {
                            const selected = exp.id === active;
                            return (
                            <li key={exp.id} className="shrink-0">
                                <button
                                onClick={() => setActive(exp.id)}
                                aria-pressed={selected}
                                className={[
                                    "relative overflow-hidden",               // clip ripple
                                    "flex items-center gap-3 px-3 text-left w-full",
                                    "h-10 rounded-md transition-colors duration-200",
                                    selected
                                    ? "text-blue-600 dark:text-blue-500"    // no hard bg
                                    : ""
                                ].join(" ")}
                                >
                                {/* one-shot ripple when selected */}
                                {selected && (
                                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                        <span
                                        className="
                                            w-28 h-10 rounded-full bg-blue-600 dark:bg-blue-500
                                            animate-[ripple_500ms_ease-out]
                                            [animation-fill-mode:forwards]   /* 👈 keeps final opacity:0 */
                                        "
                                        />
                                    </span>
                                )}

                                <span className="text-sm font-medium truncate">{exp.company}</span>
                                </button>
                            </li>
                            );
                        })}
                        </ul>
                    </div>
                </aside>

                {/* Right: detail card (shared) */}
                <div className="w-full min-h-[300px]">
                    <div className="rounded-xl bg-gray-300 dark:bg-zinc-800 p-5">
                        <div className="flex items-center">
                            <div>
                                <h3 className="text-xl font-semibold">
                                    {current.role}{" "}
                                    <span className="text-blue-600 dark:text-blue-500">@ {current.company}</span>
                                </h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">{current.dates}</p>
                            </div>
                        </div>

                        <ul className="mt-4 space-y-3 text-zinc-700 dark:text-slate-300">
                        {current.bullets.map((b, i) => (
                            <FadeInItem key={`${active}-${i}`} delay={i * 160}>
                                <div className="flex gap-3">
                                    <BiRightArrow className="mt-0.5 h-4 w-4 text-blue-600 shrink-0" />
                                    <p className="text-sm leading-relaxed">{b}</p>
                                </div>
                            </FadeInItem>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience