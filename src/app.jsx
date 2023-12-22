import react from "react"
import Header from "./components/header"
import "./app.css"
import Body from "./components/body"
 
function App(){
    return (
        <div className="app-div">
            <Header/>
            <Body />
        </div>
    )
}

export default App