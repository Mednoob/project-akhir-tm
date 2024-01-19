import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center gap-1">
                    <p className="font-bold text-2xl">Selamat Datang!</p>
                    <p>Website ini menyediakan daftar informasi dan quiz dari berbagai suku di Indonesia.</p>
                </div>

                <div className="flex items-center gap-5">
                    <Link to="/list">
                        <button className="border border-black px-5 py-3">Daftar Suku</button>
                    </Link>
                    <Link to="/quiz">
                        <button className="border border-black px-5 py-3">Quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
