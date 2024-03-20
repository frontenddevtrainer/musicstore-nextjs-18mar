"use client"

import { useState } from "react"

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function doLogin(e: any) {
        e.preventDefault();
        const response = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password })
        })
        const data = await response.json();
    }

    return <form onSubmit={doLogin}>
        <div>
            <input onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div>
            <input onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <button>Login</button>
    </form>
}

export default LoginPage;