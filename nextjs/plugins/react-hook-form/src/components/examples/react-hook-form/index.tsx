import React, { useState } from "react";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";

/**
 * This component is generated as an example for React-Hooks-Form
 *
 * To learn more about react-hook-form and validation form,
 * please visit https://github.com/react-hook-form/react-hook-form
 */

interface Login {
    name: string;
    lastName: string;
    email: string;
    password: string | number;
}

export const FormExample = () => {
    const [isSubmit, setSubmit] = useState(false);
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<Login>();
    const onSubmit: SubmitHandler<Login> = () => {
        setSubmit(true);
    };

    const handleError = (error?: FieldError) => {
        if (!error) {
            return;
        }

        switch (error.type) {
            case "required":
            case "minLength":
            case "pattern":
                return (
                    <span style={{ color: "red", marginLeft: 8 }}>
                        {error.message}
                    </span>
                );
        }
    };

    return (
        <form
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                maxWidth: 300,
            }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                type="text"
                placeholder="First Name..."
                {...register("name", {
                    required: "Name field is required!",
                    minLength: {
                        value: 4,
                        message: "Name must be at least 4 characters",
                    },
                })}
            />
            {handleError(errors.name)}

            <input
                type="text"
                placeholder="Last Name..."
                {...register("lastName", {
                    required: "Last name field required!",
                })}
            />
            {handleError(errors.lastName)}

            <input
                type="text"
                placeholder="Email..."
                {...register("email", {
                    required: "Email field is required!",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email adress",
                    },
                })}
            />
            {handleError(errors.email)}

            <input
                type="password"
                placeholder="Password"
                {...register("password", {
                    required:
                        "Password cannot be empty please type your password",
                    minLength: {
                        value: 5,
                        message: "Password must be at least 5 characters long",
                    },
                })}
            />
            {handleError(errors.password)}
            <input type="submit" value="Submit" />

            {isSubmit ? (
                <h4>Registration Successful! Welcome {getValues("name")}</h4>
            ) : null}

            <a
                href="https://github.com/react-hook-form/react-hook-form"
                rel="noreferrer"
                target="_blank"
            >
                Go To Documentation
            </a>
        </form>
    );
};
