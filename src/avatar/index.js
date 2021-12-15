import React from "react";

export default function Avatar(props) {
  const url = `https://avatars.dicebear.com/api/adventurer/${props.value}.svg`;
  return (
    <div>
      <img src={url} width="600" height="600" alt="" />
    </div>
  );
}
