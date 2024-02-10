import axios from 'axios'

const PATH = import.meta.env.VITE_API

const loginService = async data => await axios.post(`${PATH}/user/login`, data)

const signUpService = async data => await axios.post(`${PATH}/user/signup`, data)

const updateProfileService = async data => {
    const header = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(import.meta.env.VITE_TKN)}`
        }
    }
    return await axios.put(`${PATH}/user/update`, data, header)
}

export { loginService, signUpService, updateProfileService }