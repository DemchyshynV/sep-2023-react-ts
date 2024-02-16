import {useLocation, Location} from "react-router-dom";

const useAppLocation = <T>(): Location<T> => useLocation();

export {
    useAppLocation
}

