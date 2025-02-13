import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import scholarshipImage from '../../../../client/src/images/scholarship.jpg';
import addImg from '../../images/addImage.png';
import '../cssUser/Home.css';

const Home = () => {
  return (
    <>
      <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div
              className="grid-item-1"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h1 className="main-heading">
                Welcome to <span>Scholarship</span>
                <br />
              </h1>
              <p className="info-text">Empowering the next Generation</p>
              <div className="btn_wrapper">
                <a href="/scholarships">
                  <button
                    className="btn view_more_btn"
                    style={{
                      backgroundColor: '#335eea',
                      color: '#fff',
                      width: '200px'
                    }}
                  >
                    view Scholarships
                    <i className="ri-arrow-right-line" />
                  </button>
                </a>
              </div>
            </div>
            <div
              className="grid-item-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="team_img_wrapper">
                <img src={scholarshipImage} alt="Scholarship" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rectangular-component">
        <div className="text-container">
          <p className="sen">
            <span class="sentence">
              Applying for <br />
              scholarships is overwhelming
            </span>
            <span class="sentence">
              <br />
              But without scholarships, your ability to go to college is at risk
            </span>
            <span class="sentence">
              <br />
              <br />
              ...............................................
            </span>
            <span class="sentence">
              <br />
              <br />
              <br />
              Students should be able to focus on their education rather than
              worrying about how to pay for it
            </span>
            <span class="sentence">
              <br />
              We know it’s not fair
            </span>
          </p>
        </div>
        <div className="image-container">
          <img className="addImg" src="https://scholarshipowl.com/_ipx/_/images/components/homePage/problemSection/problem-bg-s.svg" alt="Image123" />
        </div>

      </div>

      <div id="scholarship-info">
        <h1
          style={{
            textAlign: 'center',
            fontFamily: 'sans-serif',
            color: '#212529'
          }}
        >
          Your one-stop scholarship application system
        </h1>
        <div style={{ fontFamily: 'sans-serif', display: 'flex' }}>
          <div>
            <img src="https://scholarshipowl.com/_ipx/fit_outside,s_795x815/images/components/homePage/featureSet1Section/girl.png" />
          </div>
          <div>
            <h3>Personalized vetted scholarship matches</h3>
            <p>
              Get matched to scholarships that are most relevant to you. View
              scholarship credibility scores to know where to focus your time
              and energy.
            </p>
          </div>
        </div>
      </div>

      <div id="statistics">
        <div className="container service-section">
          <h1>Statistics</h1>
          <Row>
            {/* <div className="grid-cols-4"> */}
            <Col>
              <div
                className="grid-col-item"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Card border="primary">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title> 214532</Card.Title>
                    <Card.Text>Total Applications</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div
                className="grid-col-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Card border="success">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title>53246 </Card.Title>
                    <Card.Text>Scholarships Awarded</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div
                className="grid-col-item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Card border="warning">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title>76565.98</Card.Title>
                    <Card.Text>Amount Disbursed</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div
                className="grid-col-item"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Card border="dark">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title>100</Card.Title>
                    <Card.Text>Number of Scholarship Schemes</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* </div> */}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
