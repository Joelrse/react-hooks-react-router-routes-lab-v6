import React from "react"
import NavBar from "../components/NavBar"

function ErrorPage() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Oops! Looks like something went wrong.</h1>
            </main>
        </div>
    )
}
export default ErrorPage