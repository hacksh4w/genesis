import React from "react";
import "./Headerbody.css";
import bgImage from "../../assets/family_planning.webp";
function Headerbody() {
  return (
    <div className="heading_body">
      <div className="description">
        <div className="family_planning1">
          <p>FAMILY PLANNING</p>
        </div>
        <div className="famil">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br></br>Bibendum at varius vel pharetra vel turpis.<br></br>{" "}
            Suscipit adipiscing bibendum est ultricies. <br></br>Vel risus
            commodo viverra maecenas. <br></br>Hendrerit gravida rutrum quisque
            non tellus.
          </p>
        </div>
      </div>

      <img src={bgImage}></img>
    </div>
  );
}

export default Headerbody;
