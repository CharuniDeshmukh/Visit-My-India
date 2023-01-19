import React from 'react';

let imgsrc = "https://images.unsplash.com/photo-1631867675167-90a456a90863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80";

let form = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff6f6",
    padding: "1rem 2rem",
    border: "1px solid black",
    borderRadius: "5px",
    fontSize: "1.2rem"
}

let imgsty = {
    height: "300px",
    border: "2px solid black",
}

export const Login = () => {
    return (
        <div className='formDiv'>
            <br />
            <h1>Login Now</h1>
            <br />
            <form  style={ form } action="/" method=''>
                <br />
                <img style={ imgsty } src={ imgsrc } alt="contact" />
                <br />

                <label className="label" htmlFor="email">Email</label>
                <input className='incon' type="email" id="email" name="email" placeholder="Your Email.." />

                <label className="label" htmlFor="pass">Password</label>
                <input className='incon' type="password" id="pass" name="pass" placeholder="Your Password.." />

                <input className="submitForm" type="submit" value="Login Now" />
            </form>

        </div>
    );
};
