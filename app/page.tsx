'use client'
import React, { useEffect } from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
        if (!sections.length) return;

        const io = new IntersectionObserver(
            (entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return;

                const section = e.target as HTMLElement;
                section.classList.add("is-visible");

                // NEW: index each .stagger group inside the revealed section
                const groups = section.querySelectorAll<HTMLElement>(".stagger");
                groups.forEach((g) => {
                Array.from(g.children).forEach((child, i) => {
                    (child as HTMLElement).style.setProperty("--i", String(i));
                });
                });

                // Keep observing if you want re-animate on re-entry; otherwise unobserve:
                // io.unobserve(section);
            });
            },
            { root: null, rootMargin: "0px 0px -15% 0px", threshold: 0.01 }
        );

        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, []);

    return (
        <div className='flex flex-col'>
            <Intro />
            <About />
            <Experience />
            <Projects />
        </div>
    );
}
