import React from "react";

function Slides({ slides }) {
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined">
          Restart
        </button>
        <button data-testid="button-prev" className="small">
          Prev
        </button>
        <button data-testid="button-next" className="small">
          Next
        </button>
      </div>

      <div id="slide" className="card text-center">
        <h1 data-testid="title"></h1>
        <p data-testid="text"></p>
      </div>
    </div>
  );
}

export default Slides;
