import { useState } from "react";

import "./App.css";
const TabStrip = (props) => {
  const setActiveIndex = (activeIndex) => {
    props.onActiveIndexChange(activeIndex);
  };

  const isActive = (index) => {
    return index === props.activeIndex;
  };

  return (
    <div className="TabStrip">
      {props.titles.map((title, index) => {
        const className =
          "TabStrip-title" + (isActive(index) ? " TabStrip-title-active" : "");

        return (
          <div
            onClick={() => setActiveIndex(index)}
            key={index}
            className={className}
          >
            {title}
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleActiveIndexChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <TabStrip
        activeIndex={activeIndex}
        onActiveIndexChange={handleActiveIndexChange}
        titles={["My account", "Settings", "Dashboard"]}
      />
    </div>
  );
};

export default App;
