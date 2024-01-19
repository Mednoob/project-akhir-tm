import QuizInterface from "../components/QuizInterface";
import Countdown from "../components/Countdown";
import { questions } from "../questions";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Quiz() {
    const [start, setStart] = useState(false);

    return (
        start
            ? <Countdown><QuizInterface questions={questions} /></Countdown>
            : (
                <div className="w-screen h-screen flex items-center justify-center">
                    <Link to="/" className="fixed w-full top-2 left-2">
                        <button className="border border-black duration-200 opacity-20 hover:opacity-100 bg-slate-700 px-5 py-1 ml-5">Kembali</button>
                    </Link>
                    <div className="flex flex-col items-center">
                        <p className="font-bold text-xl">Quiz</p>
                        <p>Tunjukkan pengetahuanmu mengenai suku lewat quiz ini.</p>

                        <button onClick={() => setStart(true)} className="border border-black px-5 py-3 mt-5">Mulai</button>
                    </div>
                </div>
            )
    )
}
