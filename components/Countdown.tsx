import { Transition } from "@headlessui/react";
import { ReactNode, useRef, useState } from "react";

export default function Countdown({ children }: { children?: ReactNode }) {
    const ref = useRef<HTMLAudioElement>(null);
    const [count, setCount] = useState(3);
    const [stop, setStop] = useState(false);

    return (
        stop
            ? children
            : (
                <div className="w-screen h-screen flex justify-center items-center">
                    <audio src="/ding.wav" ref={ref} />
                    <Transition
                        appear
                        show={true}
                        key={count}
                        beforeEnter={() => ref.current?.play()}
                        enter="duration-1000"
                        enterFrom="scale-125 opacity-0"
                        enterTo="scale-100 opacity-100"
                        afterEnter={() => {
                            ref.current?.load();
                            if (count === 1) {
                                setStop(true);
                            } else {
                                setCount(count - 1);
                            }
                        }}>
                        <p className="text-3xl">{count}</p>
                    </Transition>
                </div>
            )
    )
}
