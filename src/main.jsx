import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { ButtonSpec } from "./hideButton"
import Apifetch from "./ApiFetch"

ReactDOM.createRoot(document.getElementById('root')).render(<StrictMode><Apifetch></Apifetch></StrictMode>)

