import { useParams } from "react-router-dom";
import "./ForgotPassword.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { validatePassword } from "../../scripts/utils/validations";
import { callResetPassword } from "../../scripts/api/accountCalls";

const ForgotPassword = () => {

    const { token } = useParams();

    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [errorMsg, setErrormsg] = useState("");

    const handleFirstInput = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstPassword(event.target.value);
    }

    const handleSecondInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSecondPassword(event.target.value);
    }

    const handleReset = async () => {
        const validation = validatePassword(firstPassword, secondPassword);
        if (validation.success) {
            if (!token) {
                setErrormsg("No token provided");
            } else {
                const result = await callResetPassword(token, firstPassword);
            }
        } else {
            setErrormsg(validation.problem!);
        }
    }

    return (
        <div className="forgot-password">
            <form>
                <label htmlFor="password">New password:</label>
                <input type="text" name="password" id="password" onChange={handleFirstInput} />
                <label htmlFor="password-check">Confirm new password:</label>
                <input type="text" name="password" id="password" onChange={handleSecondInput} />
                <button type="button" onClick={handleReset}>Reset password</button>
                <p>{errorMsg}</p>
            </form>
        </div>
    )
};

export default ForgotPassword;