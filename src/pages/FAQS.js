//---------------Import--------------------
import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios';

//---------------Define FAQ Function----------------
const FAQS = () => {

  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    sendGetRequest();
  }, []);


  //--------------Define Get Request method-------------
  const sendGetRequest = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/faqs/')
      setFaqs(response.data);
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <section id="faqs">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="text-center">FAQ's</h1>
              <Accordion>
                {
                  faqs.map((f) => (
                    <Faq faq={f} key={f._id} />
                  ))
                }
              </Accordion>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Faq = ({ faq }) => {
  return (
    <>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={faq._id}>
          {faq.question}
          <i className="fa fa-angle-down d-flex justify-content-end" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={faq._id}>
          <Card.Body>
            {faq.answer}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  )
}

//------------------Export------------------
export default FAQS;
