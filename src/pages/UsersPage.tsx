import {Outlet} from "react-router-dom";

import {Users} from "../components";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Users/>
        </div>
    );
};

export {UsersPage};