import { useContext } from "react";
import SecurityContext from "./SecurityContext";

const UserProfile = () => {
    const {userName} = useContext(SecurityContext);

    return (
        <div>
            Current User Name: {userName}
        </div>
    )
};

export default UserProfile;