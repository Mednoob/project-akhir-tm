import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function Question({ data, onAnswer, onEnd }: { data: Question, onAnswer: (result: boolean) => void, onEnd: () => void }) {
    const [answered, setAnswered] = useState(false);
    const [colors, setColors] = useState<("green"|"red"|"opa-low"|null)[]>(data.options.map(() => null));
    const [show, setShow] = useState(false);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="w-full h-full overflow-x-hidden overflow-y-auto">
                {
                    typeof data.question === "string"
                        ? (
                            <div className="w-full h-full flex justify-center items-center p-10">
                                <p className="text-8xl">
                                    {data.question}
                                </p>
                            </div>
                        )
                        : data.question
                }
            </div>
            <div className="w-full max-h-[25%] bg-slate-700 text-slate-200 flex justify-evenly items-center py-5 px-3 gap-5">
                {colors.map((x, i) => (
                    <div
                        key={i}
                        className={`w-full p-3 rounded-xl flex justify-center items-center ${x ? "" : "cursor-pointer"} border border-slate-200 ${x ? x === "green" ? "bg-green-500" : x === "red" ? "bg-red-500" : "opacity-50" : ""}`}
                        onClick={() => {
                            if (answered) return;
                            setAnswered(true);

                            const res = data.answer === i;
                            onAnswer(res);
                            setColors(colors => colors.map((_, j) => j === i ? res ? "green" : "red" : j === data.answer ? "green" : "opa-low"));

                            setShow(true);
                        }}>
                            {data.options[i]}
                    </div>
                ))}
            </div>
            <div className="w-full h-0.5 bg-slate-700">
                <Transition
                    className="h-0.5 bg-black"
                    show={show}
                    enter="duration-[3s] ease-linear"
                    enterFrom="w-0"
                    enterTo="w-full"
                    afterEnter={() => {
                        onEnd();
                    }}></Transition>
            </div>
        </div>
    )
}
