import React, { useState } from "react";
import { GrTable } from "react-icons/gr";

import InterfaceMode from "../InterfaceMode/InterfaceMode";
import { TbTable } from "react-icons/tb";

const TableView = () => {
  const [active, setActive] = useState({
    activeObjects: null,
    objects: [
      {
        id: 1,
        icon: <InterfaceMode bg="#f5f5f5" icon={<GrTable size={75} />} />,
      },
      {
        id: 2,
        icon: <InterfaceMode bg="#f5f5f5" icon={<TbTable size={75} />} />,
      },
    ],
  });

  const toggleActive = (index) => {
    setActive({
      ...active,
      activeObjects: active.objects[index],
    });
  };

  const toggleStyle = (index) => {
    if (active.objects[index] === active.activeObjects) {
      return "active-view";
    } else {
      return "inactive";
    }
  };
  return (
    <div className="table-wrapper">
      <div className="table-heading">
        <h4>Table view</h4>
        <p>How are the table displayed in the app.</p>
      </div>
      <div className="table-view">
        {active.objects.map((el, index) => (
          <div
            className={toggleStyle(index)}
            key={index}
            onClick={() => {
              toggleActive(index);
            }}
          >
            {el.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableView;
