import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {carActions} from "../../store";
import {Car} from "./Car";

const Cars = () => {
    const {cars, trigger} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(carActions.getAll())
    }, [trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};