import { useContext } from "react";
import SecurityContext from "./SecurityContext";

const Login = () => {
    const { setUserName } = useContext(SecurityContext);

    return (
        <div>
            <input type="text" 
                onChange={(e) => setUserName(e.target.value)} />
        </div>
    )
};

export default Login;