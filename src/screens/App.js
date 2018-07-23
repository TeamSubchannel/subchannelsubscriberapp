import React, { Component } from "react";
import { Wrapper } from "../theme/index";
import Player from "../components/Player";
import Schedule from "../components/Schedule";
import Modal from "../shared/Modal";
import Login from "../components/Login";
import ReactDOM from 'react-dom';
import Signup from "../components/Signup/Signup";


class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],

      isUserLoggedIn: false,
      login: false,
      signup: true

    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        // videos: [...this.state.videos, this.dummyData()]
        live: {
          name: "Into the woods",
          length: 4790,
          url: "",
          thumbnail:
            "https://s33.postimg.cc/nwm3ci9rj/nick-scheerbart-32085.jpg"
        }
      };
    });
  }

  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop + node.clientHeight >= node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

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
        url: "",
        thumbnail: "https://s33.postimg.cc/545musiq7/test.jpg"
      },
      {
        name: "Video2",
        length: 4790,
        url: "",
        thumbnail:
          "https://s33.postimg.cc/x5jo8rb8f/adam-whitlock-270558-unsplash.jpg"
      },
      {
        name: "Video3",
        length: 4790,
        url: "",
        thumbnail:
          "https://s33.postimg.cc/h7ayiltv3/frank-mckenna-127295-unsplash.jpg"
      },
      {
        name: "Video4",
        length: 4790,
        url: "",
        thumbnail:
          "https://s33.postimg.cc/ed7t55zen/jakob-owens-208999-unsplash.jpg"
      },
      {
        name: "Video5",
        length: 4790,
        url: "",
        thumbnail:
          "https://s33.postimg.cc/bvw1xwn7z/jeremy-bishop-340107-unsplash.jpg"
      },
      {
        name: "Video6",
        length: 4790,
        url: "",
        thumbnail:
          "https://s33.postimg.cc/pct0gscz3/neko-tai-604247-unsplash.jpg"
      },
      {
        name: "Video7",
        length: 4790,
        url: "",
        thumbnail:
          "https://s33.postimg.cc/ook5xzbq7/steve-johnson-676943-unsplash.jpg"
      },
      {
        name: "Video8",
        length: 4790,
        url: "",
        thumbnail:
          "https://s33.postimg.cc/7o19paqz3/jakob-owens-231039-unsplash_1.jpg"
      },
      {
        name: "Video9",
        length: 4790,
        url: "",
        thumbnail:
          "https://s33.postimg.cc/q7fk2wskf/xavier-wendling-333537-unsplash.jpg"
      },
      {
        name: "Into the woods",
        length: 4790,
        url: "",
        thumbnail: "https://s33.postimg.cc/nwm3ci9rj/nick-scheerbart-32085.jpg"
      }
    ];
  };

  loadVideo = video => {
    this.setState(() => {
      return {
        live: video
      };
    });
  };

  render() {
    const { isUserLoggedIn, login, signup } = this.state;
    return (
      <Wrapper>
        <Player live={this.state.live} />
        <Schedule loadVideo={this.loadVideo} videos={this.dummyData()} />
        <Modal show={!isUserLoggedIn}>
          {login && <Login handleclick={this.handleClick} />}
          {signup && <Signup handleclick={this.handleClick} />}
        </Modal>
      </Wrapper>
    );
  }
}

export default App;
