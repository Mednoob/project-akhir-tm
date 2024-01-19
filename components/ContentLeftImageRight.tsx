import { ReactNode } from "react";

export default function ContentLeftImageBottom({ images, children }: { images: { src: string; caption: string }[], children?: ReactNode }) {
    return (
        <div className="w-full flex items-center p-10">
            <div className="w-full h-full overflow-auto">
                {children}
            </div>
            <div className="w-96 flex flex-col items-center text-center m-8 gap-8">
                {images.map(x => (
                    <div className="w-full flex flex-col items-center gap-1">
                        <img src={x.src} className="w-full"/>
                        <p className="text-xs text-gray-600 italic">{x.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
