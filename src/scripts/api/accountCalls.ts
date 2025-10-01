import { API_URI } from "../../config/environment";

export const callResetPassword = async (token: string, password: string) => {
    try {
        const response = await fetch(`${API_URI}/user/password/reset/${token}`, { //ändra till den riktiga url:en
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
        return error;
    }
};

export const callSignUp = async (username: string, password: string, email: string) => {
    try {
        const response = await fetch(`${API_URI}/user/signup`, {
            method: "post",
            body: JSON.stringify({
                username,
                password,
                email
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const callLogIn = async (password: string, username?: string, email?: string) => {
    try {
        const response = await fetch(`${API_URI}/user/login`, {
            method: "post",
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const callLogOut = async (id: string) => {
    try {
        const response = await fetch(`${API_URI}/user/logout`, {
            method: "post",
            body: JSON.stringify({
                id
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const callRefreshUserToken = async (token: string) => {
    try {
        const response = await fetch(`${API_URI}/user/refresh/${token}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const callDeleteAccount = async (id: string) => {
    try {
        const response = await fetch(`${API_URI}/user/delete/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const callSendPasswordResetEmail = async (email: string) => {
    try {
        const response = await fetch(`${API_URI}/user/sendEmail`, {
            method: "post",
            body: JSON.stringify({
                email
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}