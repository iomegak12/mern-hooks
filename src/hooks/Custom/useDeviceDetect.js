import { useDebugValue, useState } from "react";

const useDeviceDetect = () => {
    const navigatorInfo = window.navigator.userAgent || "";
    const mobileAgentExpression = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
    const mobileRegExp = new RegExp(mobileAgentExpression);
    const isMobile = new Boolean(navigatorInfo.match(mobileRegExp));

    const [s, setS] =useState(10);

    useDebugValue({
        message: 'Device Detection Process',
        s,
        isMobile,
        errorMessage: '',
        time: Date.now()
    });

    return { isMobile };
};

export default useDeviceDetect;