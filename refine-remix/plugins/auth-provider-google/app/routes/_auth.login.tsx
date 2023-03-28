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
            <Form action="/auth/google/" method="post">
                <button type="submit">Sign in with Google</button>
            </Form>
        </div>
    );
}
