import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
// import "./App.css";

function App() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/get-profile");
        console.log(res);
    }, []);

    const handleRegister = async () => {
        console.log(fullName, email, password);
    };

    return (
        <div>
            <h1>HI</h1>
            <input type="text" onChange={(e) => setFullName(e.target.value)} />
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Get me an account</button>
        </div>
    );
}

export default App;
