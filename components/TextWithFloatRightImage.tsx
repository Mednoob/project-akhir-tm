import { ReactNode } from 'react';

export default function TextWithFloatRightImage({ image, children }: { image: { src: string; caption: string }, children?: ReactNode }) {
    return (
        <div className="w-full overflow-auto p-10">
            <div className="ml-4 float-right flex flex-col items-center gap-1">
                <img src={image.src} className="w-60" />
                <p className="text-xs text-gray-600 italic">{image.caption}</p>
            </div>
            {children}
        </div>
    )
}
