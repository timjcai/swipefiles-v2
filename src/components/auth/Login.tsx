import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase-config";
import { OAuthButton, SectionRegistration, StyledRegisterForm } from ".";
import { Icon } from "../common/Icon";
import { GoogleAuthRegistration } from "../../util/authUtils";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState<boolean>(false);
    const [emailFocus, setEmailFocus] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");
    const [validPassword, setValidPassword] = useState<boolean>(false);
    const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

    const user = useAuth();

    console.log(user);
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <SectionRegistration>
            <StyledRegisterForm onSubmit={signIn}>
                <h1>Log In</h1>
                <label htmlFor="email">
                    Email:
                    <span className={validEmail ? "valid" : "hide"}>
                        <Icon label={"Valid"} />
                    </span>
                    <span className={validEmail || !email ? "hide" : "invalid"}>
                        <Icon label={"Invalid"} />
                    </span>
                </label>
                <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="emailnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                />
                <p
                    id="emailnote"
                    className={
                        emailFocus && email && !validEmail
                            ? "instructions"
                            : "offscreen"
                    }
                >
                    <Icon label={"Info"} />
                    {/* 4 to 24 characters.
        <br /> */}
                    Must begin with a letter. <br />
                    Letters, numbers, underscores, hypens allowed.
                </p>
                <br />
                <label htmlFor="password">
                    Password:
                    <Icon
                        label={"Valid"}
                        className={validPassword ? "valid" : "hide"}
                    />
                    <Icon
                        label={"Invalid"}
                        className={
                            validPassword || !password ? "hide" : "invalid"
                        }
                    />
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    aria-invalid={validPassword ? "false" : "true"}
                    aria-describedby="passwordnote"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                />
                <button type="submit">Log In</button>
                <br />
                <p>or</p>
                <OAuthButton
                    label={"Google"}
                    authFunction={GoogleAuthRegistration}
                    cta={"Sign in with"}
                />
                <OAuthButton
                    label={"Facebook"}
                    authFunction={GoogleAuthRegistration}
                    cta={"Sign in with"}
                />
            </StyledRegisterForm>
        </SectionRegistration>
    );
};
