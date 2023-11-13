import {
    <%_ if (_app.isAuthRoutes) { _%>
     useLogout, 
    <%_ } _%>
     useMenu 
} from "@refinedev/core";
import { NavLink } from "react-router-dom";

export const Menu = () => {
    <%_ if (_app.isAuthRoutes) { _%>
    const { mutate: logout } = useLogout();
    <%_ } _%>
    const { menuItems } = useMenu();

    return (
        <nav className="menu">
            <ul>
                {menuItems.map((item) => (
                    <li key={item.key}>
                        <NavLink
                            to={item.route ?? "/"}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <%_ if (_app.isAuthRoutes) { _%>
            <button onClick={() => logout()}>
                Logout
            </button>
            <%_ } _%>
        </nav>
    );
};
