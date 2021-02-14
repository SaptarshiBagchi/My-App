import { useState } from "react";
import { Link } from "react-router-dom";
import pp from "../../icons/pp.jpg";
import "./Join.css";
import Load from "../Load/Load";
import { Redirect, useHistory } from "react-router-dom";
let ENDPOINT = "";

function Join() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [loading, setLoading] = useState(false);
  const [taken, setTaken] = useState(false);

  const submitForm = e => {
    e.preventDefault();
    if (name.trim().length == 0) {
      return alert("Please enter a username");
    }
    setTaken(!taken);
    setLoading(!loading);
    if (process.env.NODE_ENV !== "development") {
      ENDPOINT = "https://chat-server-klzzi.ondigitalocean.app";
      console.log(process.env.NODE_ENV);
    } else {
      ENDPOINT = "http://192.168.0.106:5000";
      console.log(process.env.NODE_ENV);
    }

    ENDPOINT += "/getusernameavailable?name=" + name;
    console.log("Initiating API call" + ENDPOINT);
    fetch(ENDPOINT)
      // .then(res => res.json())
      .then(
        result => {
          setLoading(false);
          console.log(result.status);
          if (result.status === 200) {
            setLoading(!loading);
            console.log(result);
            history.push("/chat?name=" + name + "&&room=" + room);
          } else {
            console.log("inside error");
            setLoading(false);
            setTaken(true);
          }
        },
        error => {
          console.log("inside Error");
          console.log(error);
        }
      );
  };

  return (
    <div className="joinOuterContainer">
      <img
        src={pp}
        height="280px"
        width="280px"
        alt={"This is a an alt text"}
      />
      <div className="joinInnerContainer">
        <h1 className="heading">Join our Chat Room</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={event => {
              setName(event.target.value);
            }}
          ></input>
          {taken && (
            <p className="joinParagraph">
              This username is taken, please try another
            </p>
          )}
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={event => {
              setRoom(event.target.value);
            }}
          ></input>
        </div>
        {!loading && (
          <button className="button mt-20" type="button" onClick={submitForm}>
            Sign in
          </button>
        )}

        {loading && <Load />}
      </div>
    </div>
  );
}
export default Join;
