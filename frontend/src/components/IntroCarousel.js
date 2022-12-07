import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function IntroCarousel() {
  return (
    <div>
      <Carousel style={{height:'40vh'}} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7Nfvu_fpbFpVbUFAQXk78aiClAA7CBvpfL0geKWQ519Sg9ujX1LpOaqViEXIuAiUtP0&usqp=CAU"
          alt="First slide"
          style={{width:'50%', height:'40vh'}}
        />
        <Carousel.Caption>
          <h2>Manage all your tasks seemlessly</h2>
          <p>All in one place to manage all your tasks and issues.</p>
          <p>An effective ways to manage your tasks and team members.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDbJp8_h914EFuA8PL2ZuIhD4_KaCiYfESHobbgjWq75oh-YDnEX31LovUXkEjW1Dsw4&usqp=CAU"
          alt="Second slide"
          style={{width:'50%', height:'40vh'}}
        />

        <Carousel.Caption>
          <h3>Track your projects' progress</h3>
          <p>Add team members and assign them tasks so they can easily update their progress.</p>
          <p>All you've got to do is look.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5o4QarDOzhB5u9RHDLdno5I3FBYOH4vwcKIcPo0dbAoRhsx5ViZunBLNn6wXBJOnP3Cc&usqp=CAU"
          alt="Third slide"
          style={{width:'50%', height:'40vh'}}
        />

        <Carousel.Caption>
          <h3>Manage your team's productivity</h3>
          <p>
            You always know when tasks are done and by whom
          </p>
          <p>
            Team members never have to deter each other as you can emphasize urgency
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default IntroCarousel
