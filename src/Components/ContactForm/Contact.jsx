import React,{useState} from 'react'
import emailjs from 'emailjs-com'
import './contact.css'


const Result = () => {
  return (
    <p>your message has been successfully sent. i will contact you soon</p>
  );
};

const Contact = (props) => { 
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_02eyfsa",
        "template_npm3yif",
        e.target,
        "user_acExFpzl7sQvHzPVmO8nD"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        });
    e.target.reset();
    showResult(true);
  }

  // hide result
  setTimeout(() => {
    showResult(false)
  }, 5000);

  return (
    <div className="formContainer" id="contact">
      <h2>hello</h2>
      <div className="underlineContact"></div>

      <form className="form" action="" onSubmit={sendEmail}>
        <div className="formWord">
          {/* <span>full name</span> */}
          <input
            className="input"
            type="text"
            name="name"
            required
            placeholder="Name"
          />
          {/* <span>email</span> */}
          <input
            className="input"
            type="text"
            name="user_email"
            required
            placeholder="Email"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            rows="8"
            cols="8"
            className="msg"
          ></textarea>
          <button className="btn">SEND</button>
        </div>
        {/* <div className="msg"><span>message</span></div> */}
      </form>
    </div>
  );
}

export default Contact;
