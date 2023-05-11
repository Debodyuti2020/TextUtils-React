import React, { useState } from "react"; //Import Hooks

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // })

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
    // border: '2px solid',
    // borderColor: props.mode === 'dark'?'white':'#042743'
  };

  return (
    <div style={{ width: "1000px", margin: "auto" }}>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="my-3">About Us</h1>
        {/* <div className="accordion" id="accordionExample"> */}
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            {/* <h2 className="accordion-header" id="headingOne"> */}
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="#collapseOne"
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and
                efficiently.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="#collapseOne"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                TextUtils reports the number of words and characters.Thus it is
                suitable for writing text with word/character limit.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="#collapseOne"
              >
                <strong>Browser Compatibility</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as
                Chrome, Internet Explorer, Safari, Opera. It suitesto count
                characters in facebook, block, books, excel document, pdf
                document, essays, etc
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// let mystyle = {
//   color: 'red',
// }
// <h1 className="my-3" style={myStyle}>About Us</h1>
// How to defina a inline CSS
// Here myStyle is a JS object

{
  /* <div className="container my-3">
  <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
</div> */
}

// This Code Is Only Use For Learning When We First Create About Then I Was Used That
