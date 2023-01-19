import React from 'react';

let imgsrc = "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

let textArea = {
    height: "200px"
};

let form = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
    padding: "1rem 2rem",
    border: "1px solid black",
    borderRadius: "5px",
    fontSize: "1.2rem"
}

let imgsty = {
    height: "250px",
    border: "2px solid black",
}

export const Contact = () => {
    return (
        <div className='formDiv'>
            <br />
            <h1>Contact Us</h1>
            <br />
            <form  style={ form } action="/" method=''>
                <br />
                <img style={ imgsty } src={ imgsrc } alt="contact" />
                <br />

                <label className="label" htmlFor="name">Name</label>
                <input className='incon' type="text" id="name" name="name" placeholder="Your name.." />

                <label className="label" htmlFor="email">Email</label>
                <input className='incon' type="email" id="email" name="email" placeholder="Your Email.." />

                <label className="label" htmlFor="mob">Phone</label>
                <input className='incon' type="text" id="mob" name="mob" placeholder="Your Mobile Number.." />

                <label className="label" htmlFor="subject">Message</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={ textArea}></textarea>

                <input className="submitForm" type="submit" value="Submit" />
            </form>

        </div>
    );
};
