import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  const [expandedWork, setExpandedWork] = useState(null);
  const [expandedSkills, setExpandedSkills] = useState(null);

  const toggleWork = (index) => {
    setExpandedWork(expandedWork === index ? null : index);
  };

  const toggleSkills = (index) => {
    setExpandedSkills(expandedSkills === index ? null : index);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4" class="aboutTransition">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => (
                  <tr key={i} onClick={() => toggleWork(i)} className="clickable-row">
                    <th scope="row">{data.jobtitle}</th>
                    <td>{data.where}</td>
                    <td>{data.date}</td>
                    <td>
                      <div className="progress-bar" style={{ width: `${data.value}%` }}>
                        <div className="progress-value"></div>
                      </div>
                    </td>
                    <td>
                      {expandedWork === i ? <FaChevronUp /> : <FaChevronDown />}
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {expandedWork !== null && (
              <div className="work-details">
                <p>{worktimeline[expandedWork].description}</p>
              </div>
            )}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => (
              <div key={i} onClick={() => toggleSkills(i)} className="clickable-skill">
                <h3 className="progress-title">{data.name}</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: `${data.value}%` }}>
                    <div className="progress-value"></div>
                  </div>
                </div>
                <div className="skill-toggle-icon">
                  {expandedSkills === i ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {expandedSkills === i && (
                  <div className="skill-details">
                    <p>{data.description}</p>
                  </div>
                )}
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Core Competencies</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
                
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
