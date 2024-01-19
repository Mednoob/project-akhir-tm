import { useState, useEffect } from "react";

export default function EthnicInfoDisplay({ data }: { data: Ethnic }) {
    if (typeof data === "string") data = { name: data, sections: [{ name: "Informasi Umum", content: null }] };
    const [section, setSection] = useState(0);

    useEffect(() => {
        setSection(0);
    }, [data]);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex w-full items-center h-14">
                <div className="border-b border-black w-full pl-5 h-full flex items-center">
                    <p className="font-bold text-lg">{data.name}</p>
                </div>
                {
                    (data.sections.length ? data.sections : [{ name: "Informasi Umum", content: null }])
                        .map(
                            (x, i, a) => (
                                <div
                                    key={i}
                                    className={`${i === section ? "" : "border-b"} border-x border-t ${i === 0 ? "rounded-tl-xl" : ""} ${i === a.length - 1 ? "rounded-tr-xl" : ""} border-black px-3 h-full flex justify-center items-center cursor-pointer`}
                                    onClick={() => {
                                        new Audio("/flip.mp3").play();
                                        setSection(i);
                                    }}>
                                    <p key={i} className="text-sm text-nowrap">{x.name}</p>
                                </div>
                            )
                        )
                }
                <div className="w-3 border-b border-black h-full" />
            </div>
            {
                data.sections[section]?.content
                    ? <div className="flex w-full h-full overflow-auto">
                        {
                            typeof data.sections[section].content === "string"
                                ? <p className="mx-2 mt-2 text-sm whitespace-pre-line">{data.sections[section].content}</p>
                                : data.sections[section].content
                        }
                    </div>
                    : <div className="w-full h-full flex justify-center items-center">
                        <p className="text-xl">Belum ada informasi di sini</p>
                    </div>
            }
        </div>
    )
}
