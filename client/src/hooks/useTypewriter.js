import { useState, useEffect } from "react";

export function useTypewriter(words, typingSpeed = 90, deletingSpeed = 45, pauseTime = 2000) {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        const currentWord = words[loopNum % words.length];
        let timerDelay = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && text === currentWord) {
            timerDelay = pauseTime;
        }
        else if (isDeleting && text === "") {
            timerDelay = 500;
        }
        const timeout = setTimeout(() => {
            if (!isDeleting && text === currentWord) {
                setIsDeleting(true);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
            } else {
                setText((prev) =>
                    isDeleting
                        ? currentWord.substring(0, prev.length - 1)
                        : currentWord.substring(0, prev.length + 1)
                );
            }
        }, timerDelay);

        return () => clearTimeout(timeout);

    }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);
    return text;
}