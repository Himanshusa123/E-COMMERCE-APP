import React from 'react'
import Layout from '../components/layout/Layout'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'
const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
    <Container>
      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <Card>
            <CardBody>
              <CardTitle tag="h1">Privacy Policy</CardTitle>
              <CardText>
                <p>Last updated: [Insert Date]</p>
                <h2>What Personal Information We Collect</h2>
                <p>We collect the following types of personal information:</p>
                <ul>
                  <li>Names</li>
                  <li>Email addresses</li>
                  <li>Phone numbers</li>
                  <li>Payment information</li>
                </ul>
                <h2>How We Use Personal Information</h2>
                <p>We use personal information to:</p>
                <ul>
                  <li>Process orders and transactions</li>
                  <li>Provide customer service</li>
                  <li>Analyze and improve the app</li>
                  <li>Send marketing and promotional communications</li>
                </ul>
                <h2>How and Why We Share Personal Information</h2>
                <p>We share personal information with:</p>
                <ul>
                  <li>Third-party service providers</li>
                  <li>Payment processors</li>
                  <li>Marketing partners</li>
                </ul>
                <p>We share personal information to:</p>
                <ul>
                  <li>Process orders and transactions</li>
                  <li>Provide customer service</li>
                  <li>Analyze and improve the app</li>
                </ul>
                <h2>Cookies and Similar Technologies</h2>
                <p>We use cookies and similar technologies to:</p>
                <ul>
                  <li>Analyze and improve the app</li>
                  <li>Provide personalized advertising</li>
                </ul>
                <h2>How We Protect Personal Information</h2>
                <p>We take reasonable measures to protect personal information, including:</p>
                <ul>
                  <li>Encryption</li>
                  <li>Secure servers</li>
                  <li>Access controls</li>
                </ul>
                <h2>Opt-Out Policy and Privacy Rights</h2>
                <p>You can opt-out of data collection by:</p>
                <ul>
                  <li>Disabling cookies</li>
                  <li>Unsubscribing from marketing communications</li>
                </ul>
                <p>You have the right to:</p>
                <ul>
                  <li>Access and correct your personal information</li>
                  <li>Request deletion of your personal information</li>
                </ul>
                <h2>Contact Us</h2>
                <p>If you have questions and/or require more information, do not hesitate to contact us at:</p>
                <p>[Insert Contact Information]</p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
  )
}

export default Policy
