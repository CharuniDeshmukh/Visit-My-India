import React from 'react';

let imgsrc = "https://media.istockphoto.com/id/1265292345/photo/sign-up-today.jpg?b=1&s=170667a&w=0&k=20&c=PIIU4w1pxv4a5dvQ6XhNZ3OBf7-INV0qQCP3nz6jS_I=";


let form = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "azure",
    padding: "1rem 2rem",
    border: "1px solid black",
    borderRadius: "5px",
    fontSize: "1.2rem"
}

let imgsty = {
    height: "250px",
    border: "2px solid black",
}

export const Register = () => {
    return (
        <div className='formDiv'>
            <br />
            <h1>Register Now</h1>
            <br />
            <form  style={ form } action="/" method=''>
                <br />
                <img style={ imgsty } src={ imgsrc } alt="contact" />
                <br />

                <label className="label" htmlFor="name">Name</label>
                <input className='incon' type="text" id="name" name="name" placeholder="Your name.." />

                <label className="label" htmlFor="country">Country</label>
                <input className='incon' type="text" id="country" name="country" placeholder="Your Country.." />

                <label className="label" htmlFor="mob">Phone</label>
                <input className='incon' type="text" id="mob" name="mob" placeholder="Your Mobile Number.." />

                <label className="label" htmlFor="email">Email</label>
                <input className='incon' type="email" id="email" name="email" placeholder="Your Email.." />

                <label className="label" htmlFor="pass">Password</label>
                <input className='incon' type="password" id="pass" name="pass" placeholder="Your Password.." />

                <input className="submitForm" type="submit" value="Register Now" />
            </form>

        </div>
    );
};
