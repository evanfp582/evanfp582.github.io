import React from "react";
import styles from "./bubble.module.css";

const Example = () => {
  return (
    <div>
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (<>
    <h2 className="text-7xl">
      {"Evan Fisher-Perez".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
    <h2 className="text-4xl">
      {"Software Engineer".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  </>);
};

export default Example;