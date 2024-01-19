import { ReactNode, Ref, forwardRef } from "react";

function Inner({ children, name }: { children: ReactNode; name: string }) {
    return (
        <>
            <div className="flex px-5 items-center w-full gap-4">
                <hr className="border border-black w-8" />
                <p className="font-bold">{name}</p>
                <hr className="border border-black w-full" />
            </div>
            <div className="grid grid-cols-2 w-full gap-3 p-3">
                {children}
            </div>
        </>
    )
}

export default forwardRef(
    function Category({ children, name }: { children: ReactNode; name: string }, ref: Ref<HTMLDivElement>) {
        return (
            <div className="flex flex-col items-center w-full gap-2" ref={ref}>
                <Inner name={name}>{children}</Inner>
            </div>
        )
    }
)
