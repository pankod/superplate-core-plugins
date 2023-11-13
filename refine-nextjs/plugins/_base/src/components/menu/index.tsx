import {
    <%_ if (_app.isAuthProviderCheck || _app.isNextAuthCheck) { _%>
     useLogout, 
    <%_ } _%>
     useMenu 
} from "@refinedev/core";
import Link from "next/link";

export const Menu = () => {
    <%_ if (_app.isAuthProviderCheck || _app.isNextAuthCheck) { _%>
    const { mutate: logout } = useLogout();
    <%_ } _%>
    const { menuItems, selectedKey } = useMenu();

    return (
        <nav className="menu">
            <ul>
                {menuItems.map((item) => (
                    <li key={item.key}>
                        <Link
                            href={item.route ?? "/"}
                            className={selectedKey === item.key ? "active" : ""}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <%_ if (_app.isAuthProviderCheck || _app.isNextAuthCheck) { _%>
            <button onClick={() => logout()}>
                Logout
            </button>
            <%_ } _%>
        </nav>
    );
};
