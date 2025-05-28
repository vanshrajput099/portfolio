import * as React from 'react';

const Template = ({ name, email, projectInquiry, message }) => (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
        <h3>Message from {email}</h3>
        <h3>Name : {name}</h3>
        {
            projectInquiry && <h3>Project Inquiry :{projectInquiry}</h3>
        }
        <p>Message : {message}</p>
    </div>
);

export default Template;