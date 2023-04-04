import React, { useState } from "react";

import "../settingPage.css";
import objects from "./objects";

const UIInterface = () => {
  const [active, setActive] = useState({
    activeObject: null,
    objects,
  });

  const toggleActive = (index) => {
    setActive({
      ...active,
      activeObject: active.objects[index],
    });
  };

  const toggleStyles = (index) => {
    if (active.objects[index] === active.activeObject) {
      return "active";
    } else {
      return "inactive";
    }
  };
  return (
    <div className="interface-wrapper">
      <div className="interface-heading">
        <div className="interface-heading-detail">
          <h4>Interface theme</h4>
          <p>Select or customize your UI theme.</p>
        </div>
      </div>
      <div className="interface-ui">
        {active.objects.map((el, index) => (
          <div key={index} className="ui-mode ">
            <div
              className={toggleStyles(index)}
              onClick={() => {
                toggleActive(index);
              }}
            >
              {el.icon}
            </div>
            <p>{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UIInterface;
