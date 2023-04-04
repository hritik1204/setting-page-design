import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { TbSunMoon } from "react-icons/tb";
import InterfaceMode from "../InterfaceMode/InterfaceMode";

const objects = [
  {
    id: 1,
    icon: (
      <InterfaceMode icon={<TbSunMoon color="gray" size={40} />} bg="#DDDDDD" />
    ),
    text: "System Preference",
  },

  {
    id: 2,
    icon: (
      <InterfaceMode
        icon={<BsFillSunFill color="#181818" size={40} />}
        bg="#f5f5f5"
      />
    ),
    text: "Light",
  },

  {
    id: 3,
    icon: (
      <InterfaceMode
        icon={<MdDarkMode color="#ffff" size={40} />}
        bg="#181818"
      />
    ),
    text: "Dark",
  },
];

export default objects;
