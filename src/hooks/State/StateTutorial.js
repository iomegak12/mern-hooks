import { useState } from "react";

const StateTutorial = () => {
    const [muffinCount, setMuffinCount] = useState(0);

    const increase = () => setMuffinCount(muffinCount + 1);
    const decrease = () => setMuffinCount(muffinCount - 1);

    return (
        <div>
            <input type="text" readOnly placeholder="Enter No. of Muffins ..." value={muffinCount} />

            <br />
            <br />

            <button onClick={increase}>Add Muffin</button> | &nbsp;
            <button onClick={decrease}>Remove Muffin</button>
        </div>
    )
};

export default StateTutorial;