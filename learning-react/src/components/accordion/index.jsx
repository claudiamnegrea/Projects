//single menu
//multiple menu

import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cypMultiple = [...multiple];
    const findIndexOfCurrentId = cypMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) cypMultiple.push(getCurrentId);
    else cypMultiple.splice(findIndexOfCurrentId, 1);
    setMultipleSelected(cypMultiple);
    console.log(findIndexOfCurrentId, multiple);
  }
  //return <div>Accordion</div>
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultipleSelected] = useState([]);
  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="button"
      >
        Enable single selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                on
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
