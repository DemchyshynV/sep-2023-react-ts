import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IUser} from "../../interfaces";

interface IProps extends PropsWithChildren {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    const {id, name} = user;

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={() => navigate(id.toString(), {state: {user}})}>Details</button>
        </div>
    );
};

export {User};