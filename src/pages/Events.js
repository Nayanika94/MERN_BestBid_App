import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    sendGetRequest();
  }, []);

  //--------------Define Get Request method-------------
  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/api/Events/"
      );
      setEvents(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <div className="leftBox">
        <div className="content">
          <h1>Events</h1>
          <div className="image">
            <br></br>
            <br></br>
            <h3>
              Best Bid offers you variety of offers. Great deals starts from
              12th april to 30th may.<br></br>
              <br></br> What you can except ? <br></br>
              <br></br>
              <p> You will find great deals on all the products. </p>
              <br></br>
              <ul>
                <li>Flat 30% off on Home Appliances</li>
                <li>Get 200$ Gift cards on Sony Tv Appliances</li>
                <li>Flat 30% off on Home Appliances</li>
              </ul>
            </h3>
          </div>
        </div>
      </div>

      <div className="events">
        <ul>
          {events.map((e) => (
            <Event event={e} key={e._id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const Event = ({ event }) => {
  return (
    <>
      <li className="eventList">
        <div className="time">
          <h2>
            {event.date}
            <span> {event.month}</span>
          </h2>
        </div>
        <div className="details">
          <h3> {event.eventName}</h3>

          <p>{event.eventDetails}</p>
        </div>
      </li>
    </>
  );
};

export default Events;
