import React from "react";

import "../../navbar/navbar.css";

const ProfilePic = () => {
  return (
    <div className="profile-img">
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnFMEloau8iHycgIJkZKnFxEVxjvKpnIe1ZsJR9GygDqXALjw7hliwBRMMBU89OI9FNE&usqp=CAU"
        }
        alt="profile Photo"
      />
    </div>
  );
};

export default ProfilePic;
