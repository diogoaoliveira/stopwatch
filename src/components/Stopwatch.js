import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import {
  GlobalStyle,
  Container,
  Time,
  Button,
  ActionsContainer,
} from './styles';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleWatch = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 0);
    }
    setRunning(!running);
  };

  const clearWatch = () => {
    if (running) {
      clearInterval(intervalRef.current);
      const startTime = Date.now() - 0;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 0);
    } else {
      clearInterval(intervalRef.current);
      setTime(0);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Time>{moment(time).format('mm:ss:SSS')}</Time>
        <ActionsContainer>
          <Button onClick={() => handleWatch()}>
            {running ? 'Stop' : 'Start'}
          </Button>
          <Button onClick={() => clearWatch()}>Clear</Button>
        </ActionsContainer>
      </Container>
    </>
  );
};

export default Stopwatch;
