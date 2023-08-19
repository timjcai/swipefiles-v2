import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
} from "firebase/auth";
import React, { useState, useEffect, useRef } from "react";
import { auth, providerGoogle } from "../../../firebase-config";
import styled from "styled-components";
import { Icon } from "../common/Icon";
import { Link } from "react-router-dom";
import { OAuthButton } from "./OAuthButton";
import {
    FacebookAuthRegistration,
    GoogleAuthRegistration,
} from "../../util/authUtils";
import { SectionRegistration, StyledRegisterForm } from "./auth.styles";
import { Navbar } from "../navbar/Navbar";

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState<string>("");
    const [validName, setValidName] = useState<boolean>(false);
    const [userFocus, setUserFocus] = useState<boolean>(false);

    const [email, setEmail] = useState<string>("");
    const [validEmail, setValidEmail] = useState<boolean>(false);
    const [emailFocus, setEmailFocus] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");
    const [validPassword, setValidPassword] = useState<boolean>(false);
    const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

    const [matchPassword, setMatchPassword] = useState<string>("");
    const [validMatch, setValidMatch] = useState<boolean>(false);
    const [matchFocus, setMatchFocus] = useState<boolean>(false);

    const [errMsg, setErrMsg] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USERNAME_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        setErrMsg("");
    }, [user, password, matchPassword]);

    const signUp = (e) => {
        e.preventDefault();
        const validation1 = USERNAME_REGEX.test(user);
        const validation2 = PWD_REGEX.test(password);

        if (!validation1 || !validation2) {
            setErrMsg("Invalid Entry");
            return;
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential);
                    updateProfile(auth.currentUser, {
                        displayName: user,
                    })
                        .then(() => {
                            console.log("added username to user account");
                            console.log(auth.currentUser);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((error) => {
                    console.log(error);
                });
            setSuccess(true);
        }
    };

    return (
        <>
            {success ? (
                <>
                    <Navbar />
                    <SectionRegistration>
                        <h1>Success!</h1>
                        <Link to="/swipes">Start Swiping</Link>
                    </SectionRegistration>
                </>
            ) : (
                <>
                    <Navbar />
                    <SectionRegistration>
                        <p
                            ref={errRef}
                            className={errMsg ? "errmsg" : "offscreen"}
                            aria-live="assertive"
                        >
                            {errMsg}
                        </p>
                        <h1>Create an account</h1>
                        <StyledRegisterForm onSubmit={signUp}>
                            <label htmlFor="username">
                                Username:
                                <span className={validName ? "valid" : "hide"}>
                                    <Icon label={"Valid"} />
                                </span>
                                <span
                                    className={
                                        validName || !user ? "hide" : "invalid"
                                    }
                                >
                                    <Icon label={"Invalid"} />
                                </span>
                            </label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                            <p
                                id="uidnote"
                                className={
                                    userFocus && user && !validName
                                        ? "instructions"
                                        : "offscreen"
                                }
                            >
                                <Icon label={"Info"} />
                                4 to 24 characters.
                                <br />
                                Must begin with a letter. <br />
                                Letters, numbers, underscores, hypens allowed.
                            </p>

                            <label htmlFor="email">
                                Email:
                                <span className={validEmail ? "valid" : "hide"}>
                                    <Icon label={"Valid"} />
                                </span>
                                <span
                                    className={
                                        validEmail || !email
                                            ? "hide"
                                            : "invalid"
                                    }
                                >
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

                            <label htmlFor="password">
                                Password:
                                <Icon
                                    label={"Valid"}
                                    className={validPassword ? "valid" : "hide"}
                                />
                                <Icon
                                    label={"Invalid"}
                                    className={
                                        validPassword || !password
                                            ? "hide"
                                            : "invalid"
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
                            <p
                                id="passwordnote"
                                className={
                                    passwordFocus && !validPassword
                                        ? "instructions"
                                        : "offscreen"
                                }
                            >
                                <Icon label={"Info"} />
                                8 to 24 characters.
                                <br />
                                Must include uppercase and lowercase letters, a
                                number and a special character.
                                <br />
                                Allowed special characters:{" "}
                                <span aria-label="exclamation mark">
                                    !
                                </span>{" "}
                                <span aria-label="at symbol">@</span>{" "}
                                <span aria-label="hashtag">#</span>{" "}
                                <span aria-label="dollar sign">$</span>{" "}
                                <span aria-label="percent">%</span>
                            </p>

                            <label htmlFor="confirm_password">
                                Confirm Password:
                                <Icon
                                    label={"Valid"}
                                    className={
                                        validMatch && matchPassword
                                            ? "valid"
                                            : "hide"
                                    }
                                />
                                <Icon
                                    label={"Invalid"}
                                    className={
                                        validMatch || !matchPassword
                                            ? "hide"
                                            : "invalid"
                                    }
                                />
                            </label>
                            <input
                                type="password"
                                id="confirm_password"
                                placeholder="Confirm your password"
                                onChange={(e) =>
                                    setMatchPassword(e.target.value)
                                }
                                value={matchPassword}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                            <p
                                id="confirmnote"
                                className={
                                    matchFocus && !validMatch
                                        ? "instructions"
                                        : "offscreen"
                                }
                            >
                                <Icon label={"Info"} />
                                Must match the first password input field.
                            </p>

                            <button
                                disabled={
                                    !validName || !validPassword || !validMatch
                                        ? true
                                        : false
                                }
                                type="submit"
                            >
                                Create account
                            </button>
                            <br />
                            <p>or</p>
                            <OAuthButton
                                label={"Google"}
                                authFunction={GoogleAuthRegistration}
                                cta={"Register with"}
                            />
                            <OAuthButton
                                label={"Facebook"}
                                authFunction={FacebookAuthRegistration}
                                cta={"Register with"}
                            />
                            {/* <OAuthButton label={"Apple"} />
                        <OAuthButton label={"Github"} /> */}
                            <p>
                                Already registered?
                                <br />
                                <Link to="/sign-in">Sign in</Link>
                            </p>
                        </StyledRegisterForm>
                    </SectionRegistration>
                </>
            )}
        </>
    );
};
