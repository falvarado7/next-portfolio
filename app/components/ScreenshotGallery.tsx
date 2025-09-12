"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

function LightboxPortal({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return createPortal(children, document.body);
}

type ScreenshotGalleryProps = {
    screenshots: { src: string; alt?: string }[];
};

export default function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
    const [open, setOpen] = useState(false);
    const [i, setI] = useState(0);

    const openAt = (idx: number) => { setI(idx); setOpen(true); };
    const close = () => setOpen(false);
    const prev = useCallback(() =>
                setI((n) => (n - 1 + screenshots.length) % screenshots.length),
                [screenshots.length]);
    const next = useCallback(() =>
                setI((n) => (n + 1) % screenshots.length),
                [screenshots.length]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
            window.addEventListener("keydown", onKey);
            document.body.classList.add("overflow-hidden");
            return () => {
            window.removeEventListener("keydown", onKey);
            document.body.classList.remove("overflow-hidden");
        };
    }, [open, prev, next]);

    return (
        <>
            <div className={`mt-8 ${
                    screenshots.length === 1
                    ? "flex justify-center"
                    : screenshots.length === 2
                    ? "flex justify-center gap-4"
                    : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                }`}>
                {screenshots.map((shot, idx) => (
                    <button
                    key={shot.src}
                    onClick={() => openAt(idx)}
                    className={`
                        group relative overflow-hidden rounded-xl shadow
                        ${screenshots.length === 1
                        ? "w-full max-w-[560px] aspect-[4/3]"
                        : screenshots.length === 2
                        ? "w-full max-w-[400px] aspect-[4/3]"
                        : "aspect-[4/3]"}
                    `}
                    >
                    <Image
                        src={shot.src}
                        alt={shot.alt ?? `Screenshot ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    </button>
                ))}
            </div>

            {open && (
                <LightboxPortal>
                    <div
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={close}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div
                            className="relative max-w-5xl w-full h-auto flex justify-center items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={screenshots[i].src}
                                alt={screenshots[i].alt ?? `Screenshot ${i + 1}`}
                                width={1200}
                                height={800}
                                className="object-contain max-h-[80vh] w-auto rounded-lg"
                                priority
                            />
                            {/* controls... */}
                            <button
                                aria-label="Close"
                                onClick={close}
                                className="absolute top-3 right-3 rounded-full border border-white/30 text-white/90 hover:text-white hover:border-white p-2"
                            >
                                ✕
                            </button>
                            <button
                                aria-label="Previous"
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 text-white/90 hover:text-white hover:border-white p-2"
                            >
                                ‹
                            </button>
                            <button
                                aria-label="Next"
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 text-white/90 hover:text-white hover:border-white p-2"
                            >
                                ›
                            </button>
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/70">
                                {i + 1} / {screenshots.length}
                            </div>
                        </div>
                    </div>
                </LightboxPortal>
            )}
        </>
    );
}