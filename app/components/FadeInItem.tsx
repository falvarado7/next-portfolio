"use client";
import React from 'react'

function FadeInItem({
    children,
    delay = 0,           // ms
    once = true,         // reveal only first time it enters
    margin = "0px 0px -15% 0px", // trigger as it comes up from bottom
}: {
    children: React.ReactNode;
    delay?: number;
    once?: boolean;
    margin?: string;
}) {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        if (!ref.current) return;
        const el = ref.current;

        const io = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(el);
            } else if (!once) {
            setVisible(false);
            }
        },
        { threshold: 0.01, root: null, rootMargin: margin }
        );

        io.observe(el);
        return () => io.unobserve(el);
    }, [once, margin]);

    return (
        <div
            ref={ref}
            className={`fade-in ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default FadeInItem