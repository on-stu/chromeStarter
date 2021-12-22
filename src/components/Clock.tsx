import { useEffect, useState } from "react";
import styled from "styled-components";

function Clock() {
  type time = { [key: string]: number };
  const [timeObject, setTimeObject] = useState<time>();

  const getTime = () => {
    const now: Date = new Date();
    const year: number = now.getFullYear();
    const month: number = now.getMonth() + 1;
    const date: number = now.getDate();
    const day: number = now.getDay();
    let hours: number = now.getHours();
    const minutes: number = now.getMinutes();
    const seconds: number = now.getSeconds();
    if (hours > 12) {
      hours -= 12;
    }
    setTimeObject({
      ...timeObject,
      seconds,
      date,
      day,
      hours,
      minutes,
      year,
      month,
    });
  };
  useEffect(() => {
    setTimeout(() => {
      getTime();
    }, 1000);
  }, [timeObject]);

  const getDayString = (day: number): string => {
    switch (day) {
      case 0:
        return "일";
      case 1:
        return "월";
      case 2:
        return "화";
      case 3:
        return "수";
      case 4:
        return "목";
      case 5:
        return "금";
      case 6:
        return "토";
      default:
        return "일";
    }
  };

  return (
    <Container>
      <div className="date">
        {timeObject?.month}월&nbsp;{timeObject?.date}일&nbsp;
        {timeObject && timeObject.day && getDayString(timeObject.day)}
      </div>
      <div className="middle">
        {timeObject && timeObject.hours < 10
          ? "0" + timeObject.hours
          : timeObject?.hours}
        :
        {timeObject && timeObject.minutes < 10
          ? "0" + timeObject.minutes
          : timeObject?.minutes}
        :
        {timeObject && timeObject.seconds < 10
          ? "0" + timeObject.seconds
          : timeObject?.seconds}
      </div>
      <div className="bottom"></div>
    </Container>
  );
}

export default Clock;

const Container = styled.div`
  width: 50%;
  color: whitesmoke;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  .date,
  .middle,
  .bottom {
    width: 100%;
  }
  .date {
    display: flex;
    justify-content: flex-start;
    font-size: 1.3em;
  }
  .middle {
    font-size: 12em;
    display: flex;
    justify-content: center;
  }
`;
