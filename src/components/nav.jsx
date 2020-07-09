import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { render } from "@testing-library/react";

let booksGoal = 10;

let booksCompleted = 60;

const progressInstance = (
  <ProgressBar
    striped
    variant="warning"
    now={booksCompleted}
    label={`${booksCompleted}%`}
  />
);

//render(progressInstance);

class bookStatus extends Component {
  render() {
    return (
      <div className="text-center">
        <br />
        <h4>Read {booksGoal} of books in MONTH YEAR!</h4>
        <h6># of books ahead/behind.</h6>
        <div>{progressInstance}</div>
        <br />
        <button>Edit challenge</button>
        <hr />
      </div>
    );
  }
}

export default bookStatus;
