import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>How Can I Help?</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design Support</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaboration Tools</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design Templates</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Flow Diagrams</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Real-Time Previews & Design System Support</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Security</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Performance Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing and Debugging</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deployment and Hosting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaboration and Communication</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Documentation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintenance and Support</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customized Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cross-Platform Compatibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Authentication and Authorization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Payment Integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Scalability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintenance and Support</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services