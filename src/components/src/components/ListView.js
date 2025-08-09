import React from "react";

const ListView = ({ list }) => {
  if (list.length === 0) {
    return <p>No items in the list.</p>;
  }

  const max = Math.max(...list);
  const min = Math.min(...list);

  return (
    <ul>
      {list.map((item, index) => (
        <li
          key={index}
          style={{
            color: item === max ? "green" : item === min ? "red" : "black",
            fontWeight: item === max || item === min ? "bold" : "normal",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListView;
