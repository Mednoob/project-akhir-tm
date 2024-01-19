import EID from "../components/EthnicInfoDisplay";
import HGB from "../components/HoverGrowButton";
import Category from "../components/Category";
import { ethnics } from "../ethnics";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function EthnicList() {
    const ref = useRef<Record<string, HTMLDivElement>>({});
    const [ready, setReady] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        setReady(true);
    }, []);

    return (
        <div className="w-screen h-screen text-slate-900 flex items-center">
            <div className="basis-1/3 h-full flex flex-col items-center pt-5 gap-10 border-r border-black">
                <div className="w-full flex flex-col items-center text-center gap-5">
                    <div className="w-full flex items-center justify-between text-white">
                        <Link to="/">
                            <button className="border border-white duration-200 opacity-75 hover:opacity-100 bg-slate-700 px-5 py-1 ml-5">Kembali</button>
                        </Link>
                        <Link to="/quiz">
                            <button className="border border-white duration-200 opacity-75 hover:opacity-100 bg-slate-700 px-5 py-1 mr-5">Quiz</button>
                        </Link>
                    </div>
                    <p className="font-bold text-xl">Daftar suku-suku yang ada di Indonesia</p>
                    <div className="w-full flex flex-col items-center gap-1">
                        <p className="text-xs">Navigasi</p>
                        <p className="flex max-w-full px-3 gap-2">
                            {
                                ready &&
                                Object.entries(ref.current)
                                    .map(
                                        ([k, v]) => (
                                            <a
                                                onClick={() => v.scrollIntoView({ behavior: "smooth" })}
                                                key={k}
                                                className="hover:underline text-sm text-sky-600 cursor-pointer">
                                                {k}
                                            </a>
                                        )
                                    )}
                        </p>
                    </div>
                </div>
                <div className="w-full h-full max-h-full overflow-scroll overflow-x-hidden flex flex-col items-center gap-10">
                {
                    Object.entries([...new Set(ethnics)].reduce<Record<string, [number, string][]>>((p, c, i) => {
                        const name = (typeof c === "string" ? c : c.name).replace("Suku ", "");
                        (p[name[0]] ||= []).push([i, name]);
                        return p;
                    }, {}))
                        .sort(([a],[b]) => a.localeCompare(b))
                        .map(
                            ([k, a]) => (
                                <Category name={k} key={k} ref={el => el ? (ref.current[k] = el) : null}>
                                    {
                                        a.sort(([,f], [,s]) => f.localeCompare(s))
                                        .map(([i, x]) => <HGB key={x} onClick={() => {
                                            new Audio("/click.wav").play();
                                            setSelected(i)
                                        }}>{x}</HGB>)
                                    }
                                </Category>
                            )
                        )
                }
                </div>
            </div>
            {
                selected === null
                    ? (
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="flex flex-col items-center gap-3">
                                <p className="font-bold text-xl">Selamat datang di daftar suku!</p>
                                <p className="text-sm">Silahkan klik salah satu suku yang ada di kiri layar. Informasi mengenai suku tersebut akan muncul disini.</p>
                                
                            </div>
                        </div>
                    )
                    : <EID data={ethnics[selected]} />
            }
        </div>
    )
}
