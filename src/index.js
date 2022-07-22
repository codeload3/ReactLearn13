import React from "react";
import ReactDOM from "react-dom";

// props receives a js object of the various custom attributes of the custom Card component
// which we can tap into by using the . operator
function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.Name}</h2>
      <img src={props.image} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      // we can't apply css properties using classes, ids etc. inside the custom components(i.e. Card in this case)
      // since their names don't hold any values as the predefined HTML attributes and they just get passed to props as fields
      // whose value we can access and use using . operator

      // The fields of custom component (i.e. Card here) can have any names
      Name="Beyonce"
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      Name="Jack Bauer"
      image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+7387384587"
      email="jack@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);
