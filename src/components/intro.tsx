/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatar from '../assets/images/avatar.jpeg';
import getProfileData from '../data/data';

const Intro = () => {
  const profileData = getProfileData();
  return (
    <Container className="height-100vh d-flex align-items-center intro">
      <Row className="align-items-center">
        <Col lg={3}>
          <img src={avatar} alt="avatar" className="w-100 shadow-lg rounded" />
        </Col>
        <Col lg={8}>
          <div className="pt-5 pb-5">
            <p className="pb-2">Hello! 👋🏼</p>
            <p className="pb-2">
              I&apos;m
              {' '}
              <span className="text-bold">{profileData.name}</span>
              <br />
              {profileData.intro}
            </p>
            <p>
              Get in touch
              {' 👉🏼 '}
              <a href={`mailto:${profileData.email}`}>
                {profileData.email}
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
