import useDeviceDetect from "../Custom/useDeviceDetect";

const CustomHooksUseComponent = () => {
    const { isMobile } = useDeviceDetect();

    return (
        <p>
            Device Detected: {isMobile.toString() == 'true' ? "Mobile Browser" : "Desktop Browser"}
        </p>
    );
};

export default CustomHooksUseComponent;