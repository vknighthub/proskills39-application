import { useState } from "react";

const NiceSelect = ({ arr, ChangeFilterData, name }) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  return (
    <div
      className={`nice-select select-nice ${toggle ? "open" : ""}`}
      onClick={() => setToggle(!toggle)}
    >
      <div className="nice-select-dropdown">
        <ul className="list">
          {arr &&
            arr.map((arr, i) => (
              <li
                className="option"
                key={i}
                onClick={() => {
                  setActive(arr.name);
                  ChangeFilterData(name, arr.value);
                }}
              >
                {arr.name}
              </li>
            ))}
        </ul>
      </div>
      <span className="current">
        {active.length > 0 ? active : arr[0].name}
      </span>
    </div>
  );
};
export default NiceSelect;
