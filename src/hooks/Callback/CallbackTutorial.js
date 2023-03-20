import { useCallback, useEffect, useState } from "react";

const CallbackTutorial = () => {
    const [name, setName] = useState("SONY");

    /*
        useEffect helps to handle lifecycle of component events
        if you don't specify dependency array, it provides the behavior componentDidUpdate()
        if you specify empty array as dependency, it provides componentDidMount()
        if you return a callback from the useEffect(), it provides the behavior
            of componentWillUnmount()
    */
    useEffect(() => {
        console.log('Callback Method Called!');

        return () => {
            console.log('Cleaning up done!');
        }
    }, []);

    return (
        <>
            <input type="text" onChange={(e) => setName(e.target.value)} />

            <br />

            <p>
                {name}
            </p>
        </>
    )
};

export default CallbackTutorial;