import "./RoomsPage.css";
import bannerImage from "../assets/rooms.jpg";
import Banner from "../components/Banner/Banner";
import Room from "../components/Room/Room";
import Sajaan1 from "../assets/Sajaanroom2.webp";
import Sajaan2 from "../assets/Sajaanroom.webp";
import Sajaan3 from "../assets/Sajaanroom3.webp";
import React, { useState } from "react";
import Aria1 from "../assets/aria3.webp";
import Aria2 from "../assets/aria1new.jpg";
import Aria3 from "../assets/aria2.webp";
import Sapphire1 from "../assets/sapphire1new.jpg";
import Sapphire2 from "../assets/sapphire3new.jpg";
import Sapphire3 from "../assets/sapphire2.webp";
import Iris1 from "../assets/iris2.webp";
import Iris2 from "../assets/iris1new.jpg";
import Iris3 from "../assets/aria2.webp";
import Amelia2 from "../assets/Amelia1new.jpg";
import Avu1 from "../assets/Avu2.webp";
import Avu3 from "../assets/Avu1new.jpg";

const RoomsPage = ({ data }) => {
  const [currentRoom, setCurrentRoom] = useState("Sajaan Room");

  const renderRoom = () => {
    switch (currentRoom) {
      case "Sajaan Room":
        return (
          <Room
            heading="Sajaan Room"
            text="Our Saajan room is a beautiful open space ideal for our youngest children. We provide our children with a variety of resources that stimulate their gross motor skills, speech and social skills. Babies have the opportunity to take part in messy play, water play and also join in on our cooking activities. Saajan room has a beautiful view of our garden which our children have access to daily."
            picture1={Sajaan1}
            picture2={Sajaan2}
            picture3={Sajaan3}
          />
        );
      case "Aria Room":
        return (
          <Room
            heading="Aria Room"
            text="Our Aria room is a beautiful room with plenty of space for energetic and curious babies. This room is perfect for children to develop their interests and discover new ones. We provide our children with natural resources that they can explore freely. We encourage the children to be creative and use their own imaginations. This room has been designed so that the children have a cosy area where they can relax and enjoy some time to themselves. Our Aria room has a beautiful view of our garden and the trains going past. The children have access to our garden area daily."
            picture1={Aria1}
            picture2={Aria2}
            picture3={Aria3}
          />
        );
      case "Sapphire Room":
        return (
          <Room
            heading="Sapphire Room"
            text="Our Sapphire Room is a beautiful open space with free flow access to
          our garden area for our babies to enjoy Our classroom also has its
          own separate room where our babies enjoy heuristic play."
            picture1={Sapphire1}
            picture2={Sapphire2}
            picture3={Sapphire3}
          />
        );
      case "Iris Room":
        return (
          <Room
            heading="Iris Room"
            text="Our Iris room is a beautiful room with plenty of space for toddlers.
            This room is perfect for children to develop their interests and
            discover new ones. We provide our children with natural resources
            that they can explore freely. We encourage the children to be
            creative and use their own imaginations."
            picture1={Iris1}
            picture2={Iris2}
            picture3={Iris3}
          />
        );
      case "Amelia Room":
        return (
          <Room
            heading="Amelia Room"
            text="Our Amelia room is a beautiful open space ideal for curious
              toddlers. We provide our children with a variety of resources that
              stimulate their gross motor skills, fine motor skills, speech and
              social skills. Toddlers have the opportunity to take part in messy
              play, water play and also join in on our cooking activities."
            picture1={Iris1}
            picture2={Amelia2}
            picture3={Iris3}
          />
        );
      case "Avu Suite":
        return (
          <Room
            heading="Avu Suite"
            text="Our Avu suite is a beautiful open space ideal for preschool
                children. We provide our children with a variety of resources and
                implement specific teaching methods related to our Montessori
                integrated Curriculum. The Avu suite includes an additional
                Montessori Teaching area, peace table to support emotional wellbeing
                and free flow access to our garden."
            picture1={Avu1}
            picture2={Aria2}
            picture3={Avu3}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        text1="Our Rooms"
        text2="Nurture. Enjoy. Grow. Flourish."
      />

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
