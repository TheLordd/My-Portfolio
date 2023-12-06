import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Coding Academy Website',
    github: 'https://github.com/TheLordd',
    live: "https://tauglobalnigeria.com"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Training and Empowerment',
    github: 'https://github.com/TheLordd',
    live: "https://techartinnovation.org/"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Evennts and Tickets site',
    github: 'https://github.com/TheLordd',
    live: "https://development.eventsbyblackdiamond.com/"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Logistics Mobile App(in dev phase 3)',
    github: 'https://github.com/TheLordd',
    live: ""
  },
  {
    id: 5,
    image: IMG5,
    title: 'Education site(Final Phase)',
    github: 'https://github.com/TheLordd',
    live: "https://development.tauglobalnigeria.com/login"
  },
  {
    id: 6,
    image: IMG6,
    title: 'Church Website(Final Phase)',
    github: 'https://github.com/TheLordd',
    live: ""
  },
  {
    id: 7,
    image: IMG7,
    title: 'Christian Dating Site(First Phase in Progress)',
    github: 'https://github.com/TheLordd',
    live: "https://truelurve.com"
  },
]

const Portfolio = () => {
  return (
    <section id='about'>
      <h5>What I have been up to...</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, live}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={live} className='btn btn-primary' target='_blank'>Check it Out</a>
                </div>
              </article>
        
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio