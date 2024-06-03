import React from 'react';
import './RoomsPage.css'

const RoomsPage = ({data}) => {
  return (
    <div class="container text-center">
  <div class="row">
    <div class="col-5 room-column">
      1 of 2
    </div>
    <div class="col room-column">
    <img className="room-image-large" src="/src/assets/Sajaanroom2.webp" />
    </div>
    <div class="col room-column">
    <img className="room-image-small" src="/src/assets/Sajaanroom.webp" />
    <img className="room-image-small" src="/src/assets/Sajaanroom3.webp" />
    </div>
  </div>
  </div>
  );
};

export default RoomsPage;