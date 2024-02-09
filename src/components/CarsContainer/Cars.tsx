import {FC} from "react";

import {ICar} from "../../interfaces/carInterface";
import {Car} from "./Car";
import {ISetState} from "../../types/setStateType";

interface IProps {
    cars: ICar[]
    setCarForUpdate: ISetState<ICar>,
    changeTrigger:()=>void
}

const Cars: FC<IProps> = ({cars,setCarForUpdate,changeTrigger}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>)}
        </div>
    );
};

export {Cars};