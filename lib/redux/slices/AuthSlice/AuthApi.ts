import {API_URL} from "@/app/setting/API";
import axios from "@/app/setting/our_axios";


const API = API_URL+"/users";
axios.defaults.headers.common['Content-Type'] = 'application/json';
export const LoginApi=async (user:any)=>{
    const result = await axios.post(API+`/login`,user)
    console.log("axios.get",result);
    const userRes = await result;
    return userRes;
}