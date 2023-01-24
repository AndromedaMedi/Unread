import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = ({onFormSubmit}) => {
    const navigate = useNavigate();

    const [stateUsername, setUsername] = useState("");
    const [stateEmail, setEmail] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const login = {username: stateUsername, email: stateEmail};
        onFormSubmit(login);
        navigate('/discover');
    };


    return (

        <>
        <form onSubmit={handleLoginSubmit}>
            <input type="text" placeholder="User Name" value={stateUsername} onChange={handleUsername}/>
            <input type="text" placeholder="E-mail" value={stateEmail} onChange={handleEmail}/>
            <input type="submit" value="Submit"/>
        </form>
        </>

    )
}

export default LoginForm;