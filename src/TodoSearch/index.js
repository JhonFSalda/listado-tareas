import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className="TodoSearch">
      <input placeholder="Busca una tarea" onChange={onSearchValueChange} value={searchValue} />
    </div>
  );
}

export { TodoSearch };

