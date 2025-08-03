const BASE_URL = ""

export const callResetPassword = async (token: string, password: string) => {
    try {
        const response = await fetch(`http://127.0.0.1:3000/user/password/reset/${token}`, { //ändra till den riktiga url:en
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
        console.log(error);
    }
}