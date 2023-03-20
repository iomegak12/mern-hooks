import { useState } from "react";
import Login from "./Login";
import SecurityContext from "./SecurityContext";
import UserProfile from "./UserProfile";

const SignIn = () => {
    const [userName, setUserName] = useState("");

    return (
        <SecurityContext.Provider value={{
            userName, setUserName
        }}>
            <div>
                <Login />

                <br/>
                <br/>

                <UserProfile />
            </div>
        </SecurityContext.Provider>
    );
};

export default SignIn;