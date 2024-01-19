import EthnicList from './EthnicList.tsx'
import Quiz from './Quiz.tsx'
import App from './App.tsx'

import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Routing() {
    const ref = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        function playAudio() {
            ref.current!.volume = 0.1;
            ref.current?.play();
            document.removeEventListener("click", playAudio);
        }

        document.addEventListener("click", playAudio);
    }, []);

    return (
        <>
            <audio src="/Timeline.mp3" ref={ref} loop></audio>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/list" element={<EthnicList />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </HashRouter>
        </>
    )
}