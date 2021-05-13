import axios from 'axios'

export { }

interface user {
    usernameValue: string,
    emailValue: string,
    passValue: string,
    conditionsAgreed: boolean
}

export const signUp = (obj: user) => {
    axios.post('http://localhost:3000/Users', obj).then(resp => { return resp.request.status; console.log(resp.request.status) }).catch(resp => { return resp.request.status; console.log(resp.request.status) })
}

