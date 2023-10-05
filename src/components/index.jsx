import Navbar from "./navbar/Navbar";
import background from "../components/images/smart_waste_back.jpeg";
import sw1 from "../components/images/sw1.png";
import sw3 from "../components/images/sw3.png";
import sw4 from "../components/images/sw4.png";
import "./index.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="head-wrapper">
          <h2>Smart Garbage Monitoring</h2>
          <div className="back-img">
            <img src={background} alt="" />
          </div>
        </div>
        <div className="content-container">
          <div className="content1">
            <div className="paragraph">
              <span className="qn-head">What is Smart Waste Management?</span>
              <br />
              <p>
                Smart waste management is an innovative approach to handling and
                collecting waste. Based on IoT (Internet of Things) technology,
                smart waste management provides data on waste generation
                patterns and behavior. This empowers municipalities, cities, and
                waste collectors to optimize their waste operations, become more
                sustainable, and make more intelligent business decisions. The
                waste sector has traditionally been a static industry. And it is
                only in recent years that we have started to see modernizations
                to the ways of working in waste management. With the birth of
                IoT technology and new innovations becoming commercially
                available, waste authorities are increasingly looking to smart
                solutions, as a way of addressing budget cuts and ambitious
                sustainability targets.
              </p>
            </div>
            <div className="img-cont1">
              <img src={sw1} alt="" srcset="" />
            </div>
          </div>
          <div className="content2">
            <div className="img-cont2">
              <img src={sw3} alt="" srcset="" />
            </div>
            <div className="paragraph2">
              <span className="qn-head">
                The Old Way of Doing Waste Management
              </span>{" "}
              <br />
              <p>
                Around 80% of waste collections happen at the wrong time. Late
                waste collections lead to overflowing bins, unsanitary
                environments, citizen complaints, illegal dumping, and increased
                cleaning and collection costs. Early waste collections mean
                unnecessary carbon emissions, more traffic congestion, and
                higher running costs. The old way of doing waste management is
                highly inefficient. And in today’s ever-technological world, an
                innovative and data-driven approach is the only way forward.
                Traditionally, municipalities and waste management companies
                would operate on a fixed collection route and schedule. This
                means that waste collection trucks would drive the same
                collection route and empty every single waste container – even
                if the waste container did not need emptying. This means high
                labor and fuel costs – which residents ultimately foot the bill
                for. This is also an unsustainable way of working - the more
                vehicles on the road carrying out unnecessary collections means
                more carbon emissions are released into our planet’s atmosphere.
              </p>
            </div>
          </div>
          <div className="content1">
            <div className="paragraph">
              <span className="qn-head">The Future of Waste Management</span>
              <br />
              <p>
                In today’s ever-changing and unpredictable world, the waste
                sector needs a solution that empowers event-driven waste
                collection. Waste authorities need to move away from relying on
                historical waste trends and patterns that are no longer
                applicable to our modern way of life. The entire waste industry
                needs a solution that utilizes real-time data to make sure that
                waste containers are only picked up when needed. And this is
                where smart waste management comes in.
              </p>
            </div>
            <div className="img-cont1">
              <img src={sw4} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
