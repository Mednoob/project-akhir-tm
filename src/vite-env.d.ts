/// <reference types="vite/client" />

import { ReactNode } from "react";

declare global {
    type Ethnic = string | { name: string; sections: { name: string; content: ReactNode; }[] };

    interface Question {
        question: ReactNode;
        options: string[];
        answer: number;
    }
}
