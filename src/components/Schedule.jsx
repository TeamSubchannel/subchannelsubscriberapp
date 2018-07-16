import React, { Component } from "react";
import styled from "styled-components";
import Video from "./Video";

const Div = styled.div`
  grid-area: s;
  background-color: #565656;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Schedule extends Component {
  render() {
    const { videos } = this.props;
    return (
      <Div>
        {videos.map((video, index) => {
          return (
            <Video
              key={index}
              name={video.name}
              length={video.length}
              thumbnail={video.thumbnail}
              url={video.url}
            />
          );
        })}
      </Div>
    );
  }
}

export default Schedule;
