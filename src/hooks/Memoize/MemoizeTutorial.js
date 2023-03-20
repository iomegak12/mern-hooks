import axios from "axios";
import { useState, useEffect, useMemo } from "react";

const URL = 'https://jsonplaceholder.typicode.com/comments';

const MemoizeTutorial = () => {
    const [data, setData] = useState();
    const [longestName, setLongestName] = useState('');

    useEffect(() => {
        axios
            .get(URL)
            .then(response => {
                console.log('API Called, Loaded the Data!');
                setData(response.data);
            })
            .catch(error => console.error(`Error Occurred, Details : ${error}`));
    }, []);

    const findLongestName = (inputData) => {
        console.log('Computation Started ...');

        let longestName = '';

        if (inputData) {
            for (let record of inputData) {
                if (record.name.length >= longestName.length) {
                    longestName = record.name;
                }
            }
        }

        console.log('Computation Ended ...');

        return longestName;
    };

    const getLongestName = useMemo(
        () => findLongestName(data), [data]);

    const handleClick = () => {
        setLongestName("Changed Value!");
    };

    const handleChangeData = () => {
        setData([]);
    };

    return (
        <div>
            <button onClick={handleClick}>Change Longest Name</button>
            <button onClick={handleChangeData}>Change Data</button>

            <p>
                Longest Name: {getLongestName}
            </p>
        </div>
    );
};

export default MemoizeTutorial;