import { useParams } from "react-router-dom";
import "./ForgotPassword.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const ForgotPassword = () => {

    const { token } = useParams();

    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");

    const handleFirstInput = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstPassword(event.target.value);
    }

    const handleSecondInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSecondPassword(event.target.value);
    }

    const handleReset = () => {
        //kolla att båda lösenorden är samma
        if (firstPassword === secondPassword && firstPassword !== "") {

        } else {
            
        }
        //om ja skicka till apiet
        //om nej säg åt användaren
    }

    return (
        <div className="forgot-password">
            <form>
                <label htmlFor="password">New password:</label>
                <input type="text" name="password" id="password" onChange={handleFirstInput} />
                <label htmlFor="password-check">Confirm new password:</label>
                <input type="text" name="password" id="password" onChange={handleSecondInput} />
                <button onClick={handleReset}>Reset password</button>
            </form>
        </div>
    )
};

export default ForgotPassword;