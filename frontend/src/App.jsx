import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
    const [count, setCount] = useState(0);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        console.log(fullName, email, password);
        axios.post("http://localhost:5000/make-new-account", {
            fullName,
            email,
            password,
        });
    };

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <div>
                <h1>HI</h1>
                <input
                    type="text"
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleRegister}>Get me an account</button>
            </div>
        </div>
    );
}

export default App;
