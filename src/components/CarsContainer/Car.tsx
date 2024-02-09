import {Dispatch, FC, SetStateAction} from "react";
import {ICar} from "../../interfaces/carInterface";
import {ISetState} from "../../types/setStateType";
import {carService} from "../../services/carService";

interface IProps {
    car: ICar,
    setCarForUpdate: ISetState<ICar>
    changeTrigger: () => void
}

const Car: FC<IProps> = ({car, setCarForUpdate, changeTrigger}) => {
    const {id, brand, price, year} = car;

    const deleteById = async () => {
        await carService.deleteById(id)
        changeTrigger()
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={deleteById}>delete</button>
        </div>
    );
};

export {Car};