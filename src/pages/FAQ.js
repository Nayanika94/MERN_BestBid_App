import React from "react";
import { Accordion, Card } from "react-bootstrap";

const FAQ = () => {
  return (
    <>
      <section id="faqs">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h1 class="text-center">FAQ's</h1>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    How can I contact you?
                    <i class="fa fa-angle-down d-flex justify-content-end" />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      If you wish to end your membership, freeze your
                      membership, or transfer your membership to another club,
                      you must contact us to do so by completing a change of
                      circumstance form in your home club, by completing a
                      change of circumstance form online by visiting the member
                      portal at www.virginactive.co.uk, or by contacting
                      Customer Services. Full contact details are available from
                      reception at your home club or on the website. Only
                      notices given to us in one of these ways will be
                      considered valid notice to end, freeze or transfer your
                      membership. You can also contact us to update your
                      personal details by visiting the member portal at
                      www.virginactive.co.uk and completing a change of
                      circumstance form. If you wish to contact us in any other
                      circumstances, please contact your home club or Customer
                      Services.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Why should I use bid and proposal software?
                    <i class="fa fa-angle-down d-flex justify-content-end" />
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Bid and proposal management is key to winning new
                      business, and the quality, consistency and on-time
                      delivery of documents is vital to that success. Our bid
                      and proposal creation software provides simple, easy to
                      use tools to give your company a competitive edge. Save
                      time, save money and focus on content that wins business.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Do live online auctions replace traditional auctions?
                    <i class="fa fa-angle-down d-flex justify-content-end" />
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Online auctions do not replace traditional auctions. They
                      enhance them. With a rich history all over the world, we
                      understand that traditional live auctions are already an
                      important sales strategy for your business. But that
                      doesn’t mean it can’t be improved. Adding an online
                      channel will simply broaden your existing buyer market and
                      encourage more bidders to compete on the day.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Do online bidders experience a technical delay?
                    <i class="fa fa-angle-down d-flex justify-content-end" />
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      We believe that delays must be kept to an absolute minimum
                      – which is why we’ve spent so many years testing and
                      refining our infrastructure and webcast technologies. Our
                      streaming platform is one of the fastest on the market.
                      With a good working internet speed, any delay that might
                      occur (if any) lasts no more than a third of a second. And
                      that’s quick. In fact, it feels almost instantaneous. This
                      means your online bidders are in no way disadvantaged when
                      competing with onsite bidders.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    What do my bidders need to do to participate in a live
                    webcast auction?
                    <i class="fa fa-angle-down d-flex justify-content-end" />
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      After bidders have been approved to bid at your online
                      auction, they need to login via your website online
                      auction page. Then once the auction starts, they can make
                      bids based on the auctioneer’s direction by simply
                      clicking the ‘Bid’ button. Online bidders will be able to
                      view all onsite and online bids in real time on the bidder
                      dashboard.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    Will online auctions help me achieve higher sale prices?
                    <i class="fa fa-angle-down d-flex justify-content-end" />
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      In almost every case, online auctions result in higher
                      prices. And the reason is simple; more bidders, more bids!
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
