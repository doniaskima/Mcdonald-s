import "./Auth.css";
import {useState} from "react";
import BaseUrl from "../../BaseUrl/BaseURL";
import Header from "../../components/Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, Snackbar } from "@mui/material";
import Cheesburger from "../../images/Cheesburger.jpg";
const theme = createTheme({
    palette: {
      primary: {
        main: "#FB9D12"
      }
    }
  })


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
    
        const response = await fetch(`${BaseUrl}`, {
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
      function handleClose()
      {
        setError1(false);
        setError2(false);
        setError3(false);
        setSuccess(false);
      }
    return (
    <>
       <Header/>
        <section id="auth">
        <ThemeProvider theme={theme}>
          <form autoComplete="off" onSubmit={signIn ? login : signUp}>
            {
              !signIn && <>
                <input
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                  className="input"
                />
                <input
                  placeholder="Enter phone"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value) }}
                  className="input"
                />
              </>
            }
            <input
              placeholder="Enter email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              className="input"
            />
            <input
              placeholder="Enter password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              className="input"
            />
            <button type="submit">
              {
                signIn ? "Sign in" : "Sign up"
              }
            </button>

            {
              signIn ? <>
                <h3>
                  Don't have an account ? <span onClick={() => { setSignIn(!signIn) }}>Sign up</span>
                </h3>
              </>
                : <h3>Already have an account <span onClick={() => { setSignIn(!signIn) }}>Sign in</span></h3>
            }

          </form>
        </ThemeProvider>
        {
          error1 && <Snackbar open={error1} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity="error">
              User with the same email already exist !
            </Alert>
          </Snackbar>
        }
        {
          error2 && <Snackbar open={error2} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity="error">
              Wrong password !
            </Alert>
          </Snackbar>
        }
        {
          error3 && <Snackbar open={error3} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity="error">
              User with the given email doesn't exist !
            </Alert>
          </Snackbar>
        }
        {
          success && <Snackbar open={success} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity="success">
              User created successfully !
            </Alert>
          </Snackbar>
        }
      </section>
    </>
  )
}

export default Auth