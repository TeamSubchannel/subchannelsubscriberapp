import React, { Component } from "react";
import styled from "styled-components";
import Video from "./Video";
import { Text } from "../theme/index";
import moment from "moment";

const Div = styled.div`
  grid-area: s;
  background-color: #565656;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VideoDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 90%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 115px;
`;

const StyledText = styled(Text)`
  font-weight: 600;
  color: #fff;
  margin: 1em 0;
  margin-left: 1em;
  font-size: 1.2em;
`;

let now = moment().format("dddd MMMM Do");

class Schedule extends Component {
  render() {
    const { videos } = this.props;
    return (
      <Div>
        <StyledText>{now}</StyledText>
        <VideoDiv>
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
        </VideoDiv>
      </Div>
    );
  }
}

export default Schedule;
