import Question from "./Question";
import { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function QuizInterface({ questions }: { questions: Question[] }) {
    const [started, setStarted] = useState(false);
    const [left, setLeft] = useState<number>(120);
    const [question, setQuestion] = useState(0);
    const [ended, setEnded] = useState(false);
    const [score, setScore] = useState(0);

    const refCorrect = useRef<HTMLAudioElement>(null);
    const refTimer = useRef<HTMLAudioElement>(null);
    const refWrong = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (!ended) return;

        refTimer.current?.pause();
    }, [ended])

    useEffect(() => {
        if (!started) return;

        refTimer.current?.play();

        const inter = setInterval(() => {
            setLeft(x => x === 0 ? 0 : x! - 1);
        }, 1000);

        return () => clearInterval(inter);
    }, [started]);

    return <div className="w-screen h-screen flex flex-col items-center">
        <audio src="/correct.mp3" ref={refCorrect} />
        <audio src="/wrong.mp3" ref={refWrong} />
        <audio src="/timer.mp3" loop ref={refTimer} />
        {
            ended
                ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <Link to="/" className="fixed top-2 left-2">
                            <button className="border border-black duration-200 opacity-20 hover:opacity-100 bg-slate-700 px-5 py-1 ml-5">Kembali</button>
                        </Link>
                        <div className="flex flex-col items-center gap-3">
                            <p className="font-bold text-xl">Quiz Telah Berakhir</p>
                            <p>Score Akhir: {score} / {questions.length}</p>
                        </div>
                    </div>
                )
                : (
                    <>
                        <div className="w-full relative flex justify-between text-white bg-slate-700 px-5 py-4">
                            <p className="text-md">{left} detik</p>
                            <p className="text-md">Pertanyaan {question+1} dari {questions.length}</p>
                            <div className="absolute w-full h-0.5 left-0 bottom-0">
                                <Transition
                                    appear
                                    className="h-0.5 bg-black"
                                    show={!ended}
                                    beforeEnter={() => setStarted(true)}
                                    enter="duration-[120s] ease-linear"
                                    enterFrom="w-0"
                                    enterTo="w-full"
                                    afterEnter={() => {
                                        setEnded(true);
                                    }}></Transition>
                            </div>
                        </div>
                        <Question
                            key={question}
                            onAnswer={res => {
                                if (res) {
                                    refCorrect.current?.play();
                                    setScore(x => x + 1);
                                } else {
                                    refWrong.current?.play();
                                }
                            }}
                            onEnd={() => {
                                refCorrect.current?.load();
                                refWrong.current?.load();

                                if (question === questions.length - 1) {
                                    setEnded(true);
                                } else {
                                    setQuestion(x => x + 1);
                                }
                            }}
                            data={questions[question]}
                        />
                    </>
                )
        }
    </div>
}

// { question: "Hello", options: ["A", "B", "C", "D"], answer: 0 }
