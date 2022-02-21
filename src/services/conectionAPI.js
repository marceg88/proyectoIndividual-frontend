const API = process.env.REACT_APP_API;

let token = window.localStorage.getItem('token') || '';

const headerPost = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
}
const headerGet = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
}
const headerPut = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
}

const headerDelete = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
}

export const ReactAPI = {
    //* USER REQUESTS */
    async signUp(data) {
        const response = await fetch(`${API}/customers`, {
            method: 'POST',
            headers: headerPost,
            body: JSON.stringify(data)
        });

        const json = await response.json();
        return json;
    },

    async verifyEmail(tokenVerify) {
        const response = await fetch(`${API}/auth/verify-email`, {
            method: 'POST',
            headers: headerPost,
            body: JSON.stringify({
                hash: tokenVerify
            })
        });
        const json = await response.json();
        return json;
    },

    async signIn(data) {
        const response = await fetch(`${API}/auth/login`, {
            method: 'POST',
            headers: headerPost,
            body: JSON.stringify(data)
        });

        const user = await response.json();
        
        headerGet.Authorization = `Bearer ${user.data.token}`;
        headerPost.Authorization = `Bearer ${user.data.token}`;
        return user;
    },

}