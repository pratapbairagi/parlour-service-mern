
export const setToken = async (value) =>{
    let token = value;

    if(token){
        return localStorage.setItem("token", JSON.stringify( token) )
    }
}

export const getToken = async () => {
    let token;
    token = localStorage.getItem("token")

    if(token){
        return JSON.parse(token)
    }
}

export const deleteToken = () => {
    localStorage.removeItem("token")
}