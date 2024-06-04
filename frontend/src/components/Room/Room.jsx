import './Room.css'

export const Room = ({heading, text, picture1, picture2, picture3}) => {

  return (
    <div>
      <div className="container text-center">
        <div className="row rooms-row">
          <div className="col-5 room-column" id={heading}>
            <h3 className="room-heading">{heading}</h3>
            <p className="room-text">{text}
            </p>
          </div>
          <div className="col room-column">
            <img className="room-image-large" src={picture1} />
          </div>
          <div className="col room-column">
            <img className="room-image-small-1" src={picture2} />
            <img className="room-image-small-2" src={picture3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
