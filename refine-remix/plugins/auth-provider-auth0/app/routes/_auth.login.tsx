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
            <Form action="/auth/auth0/" method="post">
                <button type="submit">Sign in with Auth0</button>
            </Form>
        </div>
    );
}
