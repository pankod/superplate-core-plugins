import { Form } from "@remix-run/react";

export default function Login() {
    return(
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Form action="/auth/keycloak/" method="post">
                <button type="submit">Sign in with Keycloak</button>
            </Form>
        </div>
    );
}
