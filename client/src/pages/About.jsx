import React from 'react'
import Layout from '../components/layout/Layout';
import { CardTitle, CardText } from 'reactstrap'
const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="cont"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <CardTitle tag="h1">About Us</CardTitle>
          <CardText>
                <p>Welcome to [E-commerce APP], your one-stop-shop for all your [products/services] needs.</p>
                <p>We are a team of passionate individuals who are dedicated to providing the best possible shopping experience for our customers.</p>
                <p>Our mission is to make [products/services] accessible to everyone, while providing exceptional customer service and support.</p>
              </CardText>
          </p>
        </div>
      </div>
    </Layout> 
  )
}

export default About
