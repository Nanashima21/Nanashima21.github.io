import * as React from "react";
import { FC } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import type { timeline } from "../../types";
import "./Timeline.css";

type Props = {
  datas: Array<timeline>;
};

const TimeLine: FC<Props> = (props) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.4,
        },
      }}
    >
      {props.datas.map((data, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            color="textSecondary"
            sx={{ py: "12px", px: 2, m: "auto 0" }}
          >
            <div className="timestamp">
              <h4>{data.timestamp}</h4>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <div className="container">
              <img
                width="120px"
                height="120px"
                src={data.image}
                alt="Timeline Event"
              />
              <div>
                <h3>{data.title}</h3>
                <p>{data.text}</p>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimeLine;
