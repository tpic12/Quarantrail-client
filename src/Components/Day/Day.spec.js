import React from "react";
import ReactDOM from "react-dom";
import Day from "./Day";

it("Day renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Day />, div);
  ReactDOM.unmountComponentAtNode(div);
});
