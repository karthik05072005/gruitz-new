import { useEffect, useRef, useState } from "react";

interface EnergyArc {
    id: number;
    path: string;
    color: string;
    duration: number;
    delay: number;
}

const EnergyField = () => {
    const [arcs, setArcs] = useState<EnergyArc[]>([]);
    const arcIdRef = useRef(0);

    const generateRandomPath = () => {
        const width = 1200;
        const height = 800;
        const startX = Math.random() * width;
        const startY = Math.random() * height;
        const midX = startX + (Math.random() - 0.5) * 600;
        const midY = startY + (Math.random() - 0.5) * 400;
        const endX = startX + (Math.random() - 0.5) * 800;
        const endY = startY + (Math.random() - 0.5) * 600;

        return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
    };

    const generateArc = (): EnergyArc => {
        const colors = ["#9f6bff", "#7a5cff", "#b794f6", "#818cf8"];
        return {
            id: arcIdRef.current++,
            path: generateRandomPath(),
            color: colors[Math.floor(Math.random() * colors.length)],
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 2
        };
    };

    useEffect(() => {
        const initialArcs = Array.from({ length: 5 }, generateArc);
        setArcs(initialArcs);

        const interval = setInterval(() => {
            setArcs(prev => {
                const newArcs = [...prev];
                if (newArcs.length > 8) {
                    newArcs.shift();
                }
                newArcs.push(generateArc());
                return newArcs;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <svg className="energy-bg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="softGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {arcs.map(arc => (
                <g key={arc.id}>
                    <path
                        d={arc.path}
                        stroke={arc.color}
                        strokeWidth="2"
                        fill="none"
                        filter="url(#glow)"
                        className="energy-arc"
                        style={{
                            strokeDasharray: "1200",
                            strokeDashoffset: "1200",
                            animation: `pulseArc ${arc.duration}s ease-in-out ${arc.delay}s infinite`
                        }}
                    />
                    <path
                        d={arc.path}
                        stroke={arc.color}
                        strokeWidth="1"
                        fill="none"
                        filter="url(#softGlow)"
                        opacity="0.6"
                        className="energy-arc"
                        style={{
                            strokeDasharray: "1200",
                            strokeDashoffset: "1200",
                            animation: `pulseArc ${arc.duration}s ease-in-out ${arc.delay}s infinite`
                        }}
                    />
                </g>
            ))}
        </svg>
    );
};

export default EnergyField;
