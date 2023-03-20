const { useReducer } = require("react");

let state = {
    customers: [],
    isLoading: false,
    errorMessage: ''
};

const reducer = (state, action) => {
    if (action.type === 'LOAD') {
        return {
            customers: [
                { id: 1, name: 'Northwind', status: true },
                { id: 2, name: 'Southwind', status: true },
                { id: 3, name: 'Westwind', status: false },
                { id: 4, name: 'Eastwind', status: true },
                { id: 5, name: 'Adventureworks', status: true }
            ]
        };
    }
    else if (action.type === 'FILTER') {
        const activeCustomers = [];

        for (let customer of state.customers) {
            if (customer.status === true) {
                activeCustomers.push(customer);
            }
        }

        return {
            customers: activeCustomers
        };
    }
    else {
        return state.customers;
    }
};

const CustomersComponent = () => {
    const [customersState, dispatcher] = useReducer(reducer, state);

    const handleFilter = () => {
        dispatcher({
            type: 'FILTER'
        });
    };

    const handleLoad = () => {
        dispatcher({
            type: 'LOAD'
        });
    };

    return (
        <>
            <button onClick={handleLoad}>Load</button> | &nbsp;
            <button onClick={handleFilter}>Filter</button>

            <br />

            <table>
                <thead>
                    <tr>
                        <td>Customer #</td>
                        <td>Name</td>
                        <td>Status</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        customersState.customers.map(customer => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.status ? "ACTIVE" : "INACTIVE"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};

export default CustomersComponent;