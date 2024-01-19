import { ReactNode } from "react";

export default function TextTopImageBottom({ images, children }: { images: { src: string; caption: string }[], children?: ReactNode }) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-10 gap-10">
            <p className="text-xl">
                {children}
            </p>
            <div className="w-full flex justify-evenly">
                {images.map((x, i) => (
                    <div key={i}  className="h-44 flex flex-col items-center gap-1">
                        <img src={x.src} className="h-full"/>
                        <p className="text-xs text-gray-600 italic">{x.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}