import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6jt1auk', 'template_bp5ssx7', form.current, 'temc3irxt1YJzBB0d')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Send Me a Message</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>ngoybelba@gmail.com</h5>
          <a href="mailto:ngoybelba@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Ngoy Belba</h5>
          <a href="https://m.me/TheLordddddd" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+2347017097447</h5>
          <a href="https://wa.me/+2347017097447" target='_blank'>Send a message</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='subject' placeholder='What would you like to enquire about?'  required />
          <input type="text" name='name' placeholder='Your Full Name'  required />
          <input type="email" name='email' placeholder='Your Email'  required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact