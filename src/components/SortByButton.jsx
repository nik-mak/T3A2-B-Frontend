import React from "react";

/**
 * A sort by select component used to handle an arrangement of items
 *
 * @param {Array} options an array of strings that correspond to the select options
 * @param {Function} onChange a callback function that describes how the button should handle the option change
 * @param {Object} selected a state object containing the string/value of the currently selected option
 *
 * @return {HTML} a sort by button that calls an onChange function that is passed in as a prop
 */
function SortByButton({ options, onChange, selected, setSelected }) {
  /**
   * Event Handler called when there is a change in select component
   *
   * @param {Object} e an event object containing data about the change
   */
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="flex font-oswald text-lg tracking-wide">
      <label>Sort by: </label>
      <select
        value={selected}
        className=" mx-2 rounded-md border border-solid border-slate-300 bg-inherit bg-ghost-white pl-2 hover:border-cyan-cobalt-blue hover:text-cyan-cobalt-blue"
        onChange={handleChange}
      >
        {options.map((optionName) => {
          return <option key={optionName}>{optionName}</option>;
        })}
      </select>
    </div>
  );
}

export default SortByButton;
