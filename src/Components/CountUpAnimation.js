import React from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
export default function CountUpAnimation(props) {
  return (
    <>
      <CountUp end={props.endAnimation}>
        {({ countUpRef, start }) => (
          <>
            <span ref={countUpRef} />
            <Waypoint onEnter={start}></Waypoint>
          </>
        )}
      </CountUp>
    </>
  );
}
