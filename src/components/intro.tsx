/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatar from '../assets/images/avatar.jpeg';
import getProfileData from '../data/data';
import Testimonial from './Testimonial';

const Intro = () => {
  const profileData = getProfileData();
  return (
    <Container className="height-100vh d-flex align-items-center intro pt-4 pb-4">
      <Row className="align-items-center">
        <Col lg={3}>
          <img src={avatar} alt="avatar" className="shadow-lg rounded w-100" />
        </Col>
        <Col lg={6}>
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
              {' 📧 '}
              <a target="_blank" href={`mailto:${profileData.email}`} rel="noreferrer">
                {profileData.email}
              </a>
            </p>
          </div>
        </Col>
        <Col lg={3}>
          <Testimonial />
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
