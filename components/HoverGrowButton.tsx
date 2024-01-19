import { ReactNode } from "react";

export default function HoverGrowButton({ children, onClick }: { children: ReactNode, onClick?: () => void }) {
    return (
        <button onClick={onClick} className="w-full border border-black shadow-md shadow-slate-400 py-3 flex items-center justify-center hover:scale-105 transform transition-all duration-300">
            {children}
        </button>
    )
}
