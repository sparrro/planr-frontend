const BASE_URL = ""

export const callResetPassword = async (token: string, password: string) => {
    try {
        const response = await fetch(`http://localhost:5173/forgotpassword/${token}`, {
            method: "post",
            body: JSON.stringify({
                newPassword: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {

    }
}