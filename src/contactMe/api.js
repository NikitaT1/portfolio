import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "1f7d7956-460f-4c20-a95b-d50d82e17d88"},
    baseURL: 'https://api.emailjs.com/api/v1.0/email/send'

});
export const sendEmail = {


}



