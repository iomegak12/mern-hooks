import { useState } from "react";

const customerDetails = [
    { id: 10011, name: 'Northwind Traders' },
    { id: 10012, name: 'Eastwind Traders' },
    { id: 10013, name: 'Southwind Traders' },
    { id: 10014, name: 'Westwind Traders' },
    { id: 10015, name: 'Oxyrich Systems' }
];

const getName = (id) => {
    if (!id) {
        throw new Error("Invalid Id Specified!");
    }

    let name = '';

    for (let customerDetail of customerDetails) {
        if (customerDetail.id === id) {
            name = customerDetail.name;
            break;
        }
    }

    return name;
};

const NameProvider = () => {
    const [id, setId] = useState();
    const [name, setName] = useState("");

    const handleEvent = (event) => {
        setId(parseInt(event.target.value));
    };

    const processCustomerId = () => {
        let customerName = getName(id);

        setName(customerName);
    };

    return (
        <div>
            <div>
                Customer Id:
                <input type="text" placeholder="Enter ID ..." onChange={handleEvent} />

                <button onClick={processCustomerId}>Get Info</button>
            </div>

            <br />

            <p>
                <b>Customer Name: {name} </b>
            </p>
        </div>
    );
};

export default NameProvider;