import "./Auth.css";
import {useState} from "react";
import BaseUrl from "../../BaseUrl/BaseURL";
import Header from "../../components/Header/Header";
const Auth = () => {
    const [signIn, setSignIn] = useState(true);
    const [name, setName]= useState("");
    const [phone,setPhone] =useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    const [error1,setError1]= useState(false);
    const [error2,setError2]=useState(false);
    const [error3,setError3]=useState(false);
    const [success , setSuccess] = useState(false);
    

    async function login(e) {
        e.preventDefault();
    
        const response = await fetch(`${BaseUrl}`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        })
        const data = await response.json();
    
        switch (data.msg) {
          case "User with the given email doesn't exist":
            setError3(true);
            break;
          case "Wrong password":
            setError2(true);
            break;
          case "Success":
    
            window.location.href = "/";
            break;
          default:
            break;
        }
    }

    async function signUp(e) {
        e.preventDefault();
    
        const response = await fetch(`${Api}`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            password
          })
        })
    
        const data = await response.json();
    
        switch (data.msg) {
          case "User with the given email already exists":
            setError1(true);
            break;
          case "User created successfully":
            setSuccess(true);
            break;
          default:
            break;
        }
      }
    return (
    <>
       <Header/>
    </>
  )
}

export default Auth