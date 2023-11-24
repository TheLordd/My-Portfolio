import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Something</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="about me image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>4+ Years</small>
            </article>
            <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
            </article>
            <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis autem earum nobis! Aspernatur, dolorum dolor ex aliquam dolore sapiente, vitae expedita rem velit, blanditiis error iusto voluptas illo quos ad! Dignissimos veritatis delectus aliquid dolorem quis quo enim voluptate natus voluptas sint ratione suscipit ea dolore quam, necessitatibus maxime eum?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About