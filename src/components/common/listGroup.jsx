import React from "react";

const ListGroup = props => {
  const {
    items,
    selectedItem,
    textProperty,
    valueProperty,
    onItemSelect
  } = props;

  return (
    <ul className="list-group">
      {items.map(v => {
        return (
          <li
            key={v[valueProperty] ? v[valueProperty] : Math.random()}
            className={
              v === selectedItem ? "list-group-item active" : "list-group-item"
            }
            onClick={() => onItemSelect(v)}
          >
            {v[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
