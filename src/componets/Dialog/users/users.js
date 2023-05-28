import { NavLink } from "react-router-dom";



function Users (props) {


    return (
        <div>
            <NavLink to={""}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Users;