import {NavLink} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
        </div>
    );
};

export {Header};