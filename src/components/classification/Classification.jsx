import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import "./Classification.css";

function Classification() {
  return (
    <div id="classification-page">
      <h1>Classification</h1>
      <div id="classification-introduction">
        <p>
          All classification decisions are based on the BBFC’s published and
          regularly updated Guidelines. The Guidelines are the product of
          extensive public consultation, research and the accumulated experience
          of the BBFC over many years. They reflect current views on film, DVD
          and video game regulation.
          <br />
          <button type="button" id="click-here" className="btn btn-light">
            <a href="https://www.bbfc.co.uk/about-classification">
              More info here!
            </a>
          </button>
        </p>
      </div>

      
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <img
                className="Uimg"
                src="https://static.wikia.nocookie.net/rating-system/images/8/88/BBFC_U.svg"
              ></img>
              U - Universal
            </Accordion.Header>
            <Accordion.Body>
              U films should be set within a positive framework and should offer
              reassuring counterbalances to any violence, threat or horror. If a
              work is particularly suitable for pre-school children, this will
              be indicated in the Ratings Info.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <img
                className="PGimg"
                src="https://static.wikia.nocookie.net/rating-system/images/b/b5/BBFC_PG.svg"
              ></img>
              PG - Parental Guidance
            </Accordion.Header>
            <Accordion.Body>
              General viewing, but some scenes may be unsuitable for young
              children. A PG film should not unsettle a child aged around eight
              or older. Unaccompanied children of any age may watch, but parents
              are advised to consider whether the content may upset younger, or
              more sensitive, children.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <img
                className="12img"
                src="https://static.wikia.nocookie.net/rating-system/images/8/84/BBFC_12.svg"
              ></img>
              <img
                className="12Aimg"
                src="https://static.wikia.nocookie.net/rating-system/images/8/87/BBFC_12A.svg"
              ></img>
              12/12A - 12 Years and Over
            </Accordion.Header>
            <Accordion.Body>
              Films classified 12A and video works classified 12 contain
              material that is not generally suitable for children aged under
              12. No one younger than 12 may see a 12A film in a cinema unless
              accompanied by an adult. Adults planning to take a child under 12
              to view a 12A film should consider whether the film is suitable
              for that child. To help them decide, we recommend that they check
              the Ratings Info for that film in advance. No one younger than 12
              may rent or buy a 12 rated video work.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <img
                className="15img"
                src="https://static.wikia.nocookie.net/rating-system/images/0/03/BBFC_15.svg"
              ></img>
              15 - 15 Years and Over
            </Accordion.Header>
            <Accordion.Body>
              No one younger than 15 may see a 15 film in a cinema. No one
              younger than 15 may rent or buy a 15 rated video work.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <img
                className="18img"
                src="https://static.wikia.nocookie.net/rating-system/images/9/9f/BBFC_18.svg"
              ></img>
              18 - Adults Only
            </Accordion.Header>
            <Accordion.Body>
              No one younger than 18 may see an 18 film in a cinema. No one
              younger than 18 may rent or buy an 18 rated video work. Adults
              should be free to choose their own entertainment.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <img
                className="R18img"
                src="https://static.wikia.nocookie.net/rating-system/images/9/90/BBFC_R18.svg"
              ></img>
              R18 - To be shown only in Licensed Cinemas to Adults Only
            </Accordion.Header>
            <Accordion.Body>
              The R18 category is a special and legally-restricted
              classification primarily for explicit works of consenting sex or
              strong fetish material involving adults. Films may only be shown
              to adults in specially licensed cinemas, and video works may be
              supplied to adults only in licensed sex shops. R18 video works may
              not be supplied by mail order.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </div>
  );
}

export default Classification