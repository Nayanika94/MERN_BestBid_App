import React from "react";
import auction from "../assets/auction.jpg";
import auction2 from "../assets/auction2.jpg";
import auction3 from "../assets/auction3.jpg";

import Card from "react-bootstrap/Card";

export const HowDoesitWork = () => (
  <div>
    <div className="m-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="strong">
              How Auctions Work
              <br />
              on LiveAuctioneers
            </h1>
            <p className="lead">
              LiveAuctioneers allows you to bid in the world’s best auctions for
              art, antiques, luxury and collectibles.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Search from hundreds of thousands of items that match what you’re
              looking for, or simply browse by category and creator to discover
              one-of-a-kind treasures. You can place bids in advance, or bid in
              real-time during the live auction through our website and our iOS
              and Android apps. Participating in auctions on LiveAuctioneers
              just takes a few simple steps:
            </p>
          </div>

        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="site-heading text-left w-100">
            <div className="row">
              <div className="col-md-6">
                <Card.Img variant="end" src={auction} />
              </div>
              <div className="col-md-6">
                <h3>1. Create Your Free LiveAuctioneers Account</h3>
                <p>
                  Signing up for your free LiveAuctioneers account is easy and
                  secure. Once you’ve completed your profile on LiveAuctioneers,
                  you can begin participating in online auctions, saving items and
                  following searches. (Note: your information is private and
                  secure. Any credit card information added to your
                  LiveAuctioneers account will not be shared with auction houses.
                </p>
                <h3>2. Go to product list</h3>
                <p>
                  Looking for something specific? Type what you’re looking for in
                  the search bar and click ‘Follow Search’ to be notified whenever
                  new items matching your criteria are added to LiveAuctioneers.
                  You can manage your followed searches from your dashboard and in
                  the LiveAuctioneers apps for iOS and Android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="container">
        <div className="row">
          <div className="site-heading text-left w-100">
            <div className="row">
              <div className="col-md-6">
                <h3>3. Register for Auctions</h3>
                <p>To actively bid in an auction on LiveAuctioneers, you must
                  register first by clicking ‘Register for Auction’ on catalog and
                  item pages. You may also place absentee bids in advance of the
                  auction time, which doubles as registration requests if you’re
                  not already approved. Most auction houses approve registrations
                  within 24 hours. Every auction house has different criteria for
                  approval, so it’s best to register early in case they require
                  additional information from you. Once approved, any absentee
                  bids you may have placed will be active.
                </p>
                <h3>4. Place Your Bids</h3>
                <p>
                  Each auction house handles shipping and payment differently, so
                  before you bid, be sure to review shipping and payment policies
                  to avoid any surprises. Also be sure to take note of the
                  auction’s live bidding start time. This is when live bidding
                  begins, starting with the first lot in the auction.
                </p>
              </div>
              <div className="col-md-6">
                <Card.Img variant="end" src={auction2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="site-heading text-left w-100">
            <div className="row">
              <div className="col-md-6">
                <Card.Img variant="end" src={auction3} />
              </div>
              <div className="col-md-6">
                <h3>5. Win Your Treasure</h3>
                <p>
                  You will be automatically notified when you win an item on
                  LiveAuctioneers. Following the sale, you will be able to make
                  your shipping arrangements, and you will be invoiced by the
                  auction house for your item. Your credit card information on
                  LiveAuctioneers is never shared, so auction houses who do not
                  accept online payments via LiveAuctioneers may request
                  additional information from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />




    </div>
  </div>
)