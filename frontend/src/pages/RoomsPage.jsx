import "./RoomsPage.css";
import Room from "../components/Room/Room";
import Sajaan1 from "/assets/sajaan-room.webp";
import Sajaan2 from "/assets/sajaan-room-2.webp";
import Sajaan3 from "/assets/sajaan.jpeg";
import React, { useState } from "react";
import Aria1 from "/assets/aria-room.webp";
import Aria2 from "/assets/aria-room-2.webp";
import Aria3 from "/assets/aria-room-3.webp";
import Sapphire1 from "/assets/sapphire-room.webp";
import Sapphire2 from "/assets/sapphire-room-2.webp";
import Sapphire3 from "/assets/sapphire-room-3(2).webp";
import Iris1 from "/assets/iris-room.webp";
import Iris2 from "/assets/iris-room-2.webp";
import Iris3 from "/assets/iris-room-3.jpeg";
import Amelia1 from "/assets/amelia-room.webp";
import Amelia2 from "/assets/amelia-room-3.jpeg";
import Amelia3 from "/assets/amelia-room-2.webp";
import Avu1 from "/assets/avu-suite.webp";
import Avu2 from "/assets/avu-suite-2.webp";
import Avu3 from "/assets/avu-suite-3.webp";

const RoomsPage = () => {
  const [currentRoom, setCurrentRoom] = useState("Sajaan Room");

  const renderRoom = () => {
    switch (currentRoom) {
      case "Sajaan Room":
        return (
          <Room
            heading="Sajaan Room"
            text="Our Saajan room is a beautiful open space ideal for our youngest children. 
            We provide our children with a variety of resources that stimulate their gross motor skills, 
            speech and social skills. Babies have the opportunity to take part in messy play, water play 
            and also participate in cooking activities. Saajan room has a beautiful view of our garden 
            which children have access to daily."
            picture1={Sajaan1}
            picture2={Sajaan2}
            picture3={Sajaan3}
          />
        );
      case "Aria Room":
        return (
          <Room
            heading="Aria Room"
            text="Our Aria room is a beautiful area with plenty of space for energetic and curious children. 
            This room is perfect to develop individual interests and discover new ones. We provide our children 
            with natural resources so that they can explore freely, encouraging children to be creative and use 
            their own imaginations. This room has been designed so that the children have a cosy area where they 
            can relax and enjoy time to themselves. Our Aria room has a beautiful view of our garden and the trains 
            going past."
            picture1={Aria1}
            picture2={Aria2}
            picture3={Aria3}
          />
        );
      case "Sapphire Room":
        return (
          <Room
            heading="Sapphire Room"
            text="Our Sapphire Room is a beautiful open space with free flow access to our garden area for children to 
            explore. Our classroom also has its own separate area where children are free to enjoy heuristic play and 
            musical activities. Sapphire room is a beautiful space for children to enjoy natural resources and activities, 
            specific to their individual interests."
            picture1={Sapphire1}
            picture2={Sapphire2}
            picture3={Sapphire3}
          />
        );
      case "Iris Room":
        return (
          <Room
            heading="Iris Room"
            text="Our Iris room is a beautiful room with plenty of space to stay active. This room is perfect for 
            children to develop their interests and discover new ones. We provide our children with natural 
            resources so that they can explore freely, heightening their senses and learning opportunities. In 
            Iris room, we encourage the children to be creative and use their own imaginations in order to spark 
            their curiosity."
            picture1={Iris1}
            picture2={Iris2}
            picture3={Iris3}
          />
        );
      case "Amelia Room":
        return (
          <Room
            heading="Amelia Room"
            text="Our Amelia room is a beautiful open space ideal for curious children. We provide our children with a 
            variety of resources that stimulate their gross motor skills, fine motor skills, speech and social skills. 
            Children have the opportunity to take part in messy play, water play and also join in cooking activities."
            picture1={Amelia1}
            picture2={Amelia2}
            picture3={Amelia3}
          />
        );
      case "Avu Suite":
        return (
          <Room
            heading="Avu Suite"
            text="Our Avu suite is a beautiful open space ideal for children preparing for their next stage in education. 
            We provide our children with a variety of resources and implement specific teaching methods related to our 
            Montessori integrated curriculum. The Avu suite includes an additional Montessori Teaching area, peace table 
            to support emotional wellbeing and free flow access to our garden and atelier."
            picture1={Avu1}
            picture2={Avu2}
            picture3={Avu3}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <ul className="roomnav">
        <li>
          <a href="#sajaanroom" onClick={() => setCurrentRoom("Sajaan Room")}>
            Sajaan Room
          </a>
        </li>
        <li>
          <a href="#ariaroom" onClick={() => setCurrentRoom("Aria Room")}>
            Aria Room
          </a>
        </li>
        <li>
          <a
            href="#sapphireroom"
            onClick={() => setCurrentRoom("Sapphire Room")}
          >
            Sapphire Room
          </a>
        </li>
        <li>
          <a href="#irisroom" onClick={() => setCurrentRoom("Iris Room")}>
            Iris Room
          </a>
        </li>
        <li>
          <a href="#ameliaroom" onClick={() => setCurrentRoom("Amelia Room")}>
            Amelia Room
          </a>
        </li>
        <li>
          <a href="#avusuite" onClick={() => setCurrentRoom("Avu Suite")}>
            Avu Suite
          </a>
        </li>
      </ul>

      {renderRoom()}
    </div>
  );
};

export default RoomsPage;
