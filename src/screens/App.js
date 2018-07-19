import React, { Component } from "react";
import { Wrapper } from "../theme/index";
import Player from "../components/Player";
import Schedule from "../components/Schedule";
import Modal from "../shared/Modal";
import Login from "../components/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      isUserLoggedIn: true
    };
  }

  // componentDidMount() {
  //   this.setState(() => {
  //     return {
  //       videos: [...this.state.videos, this.dummyData()]
  //     };
  //   });
  // }

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
    const { isUserLoggedIn } = this.state;
    return (
      <Wrapper>
        <Player />
        <Schedule videos={this.dummyData()} />
        <Modal show={!isUserLoggedIn}>
          <Login />
        </Modal>
      </Wrapper>
    );
  }
}

export default App;
