import React, { Component } from "react";
import { Wrapper } from "../theme/index";
import Player from "../components/Player";
import Schedule from "../components/Schedule";
import Modal from "../shared/Modal";
import Login from "../components/Login";
import Signup from "../components/Signup/Signup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      isUserLoggedIn: false,
      login: true,
      signup: false
    };
  }

  // componentDidMount() {
  //   this.setState(() => {
  //     return {
  //       videos: [...this.state.videos, this.dummyData()]
  //     };
  //   });
  // }

  handleClick = e => {
    let type = e.target.id;
    console.log(e.target.id);
    if (type === "login") {
      this.setState(() => {
        return {
          login: true,
          signup: false
        };
      });
    } else {
      this.setState(() => {
        return {
          login: false,
          signup: true
        };
      });
    }
  };

  dummyData = () => {
    return [
      {
        name: "Video1",
        length: 4790,
        thumbnail: "",
        url: ""
      },
      {
        name: "Video2",
        length: 4790,
        thumbnail: "",
        url: ""
      },
      {
        name: "Video3",
        length: 4790,
        thumbnail: "",
        url: ""
      },
      {
        name: "Video4",
        length: 4790,
        thumbnail: "",
        url: ""
      },
      {
        name: "Video5",
        length: 4790,
        thumbnail: "",
        url: ""
      }
    ];
  };

  render() {
    const { isUserLoggedIn, login, signup } = this.state;
    return (
      <Wrapper>
        <Player />
        <Schedule videos={this.dummyData()} />
        <Modal show={!isUserLoggedIn}>
          {login && <Login handleclick={this.handleClick} />}
          {signup && <Signup handleclick={this.handleClick} />}
        </Modal>
      </Wrapper>
    );
  }
}

export default App;
