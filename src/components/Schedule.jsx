import React, { Component } from "react";
import styled from "styled-components";
import Video from "./Video";
import { Row, Text } from "../theme/index";
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

const StyledRow = styled(Row)`
  margin: 1em 0 1.5em 1.8em;
  flex-wrap: wrap;
`;

const StyledText = styled(Text)`
  font-weight: 600;
  color: #fff;
  margin-left: 1em;
  margin-top: 0.5em;
  font-size: 1.2em;
`;

let now = moment().format("MMMM Do");

class Schedule extends Component {
  render() {
    const { videos } = this.props;
    return (
      <Div>
        <StyledText>{now}</StyledText>
        <StyledRow>
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
        </StyledRow>
      </Div>
    );
  }
}

export default Schedule;
