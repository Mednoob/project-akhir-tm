import { ReactNode } from "react";

export default function MidText({ children }: { children?: ReactNode }) {
    return (
        <div className="w-full h-full flex justify-center items-center p-10">
            <p className="text-xl">{children}</p>
        </div>
    )
}
