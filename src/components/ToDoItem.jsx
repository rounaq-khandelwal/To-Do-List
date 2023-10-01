// import React, { useState } from "react";
// function ToDoItem(props) {
//   const [isPressed, setIsPressed] = useState(false);
//   function handleClick(event) {
//     setIsPressed(!isPressed);
//   }
//   return (
//     <li
//       onClick={handleClick}
//       style={{ textDecoration: isPressed ? "line-through" : "none" }}
//     >
//       {props.item}
//     </li>
//   );
// }
// export default ToDoItem;

//------------------------------------------------------------------//
import React from "react";
function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
export default ToDoItem;
