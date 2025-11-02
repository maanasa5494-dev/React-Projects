let _navigate = null;
const NavigatorObject = {
    setNavigate: (navigate) => {
        _navigate = navigate;
    },
    getNavigate: () => {
        return _navigate;
    }
};

export default NavigatorObject;