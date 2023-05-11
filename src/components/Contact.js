import React from "react";

export default function Contact(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#292a3e" : "#eceff1",
  };
  let bodyStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#35364d' : 'white'
  }
  return (
    <>
      <div className="containter-fluid px-0">
        <img src="../media/career.png" width="100%" alt="" />
      </div>
      <div className="container my-3" style={myStyle}>
        <h1 className="text-center">Contact Us</h1>
        <form action="" method="" className="px-5">
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              style={bodyStyle}
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              style={bodyStyle}
            />
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">
              Contact number
            </label>
            <input
              type="phone"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter your contact number"
              style={bodyStyle}
            />
          </div>
          <div className="mb-3">
            <label for="desc" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="desc"
              name="desc"
              rows="3"
              placeholder="Enter your message"
              style={bodyStyle}
            ></textarea>
          </div>
          <button
            className="btn btn-primary d-grid gap-2 col-1 mx-auto"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
