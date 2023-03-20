import { useRef } from "react";

const RefTutorial = () => {
    const textRef = useRef(null);

    const handleEvent = () => {
        if (textRef) {
            textRef.current.value = "";
            textRef.current.focus();
        }
    };

    return (
        <>
            <input type="text" ref={textRef} />

            | &nbsp;

            <button onClick={handleEvent}>Handle Event</button>
        </>
    )
};

export default RefTutorial;