import React, { useState, useEffect } from 'react';

/*
useEffect

useEffect — это хук, который позволяет выполнять побочные эффекты в функциональных компонентах.
Он заменяет методы жизненного цикла компонента, такие как componentDidMount, componentDidUpdate и componentWillUnmount.
 */
const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval); // Очистка при размонтировании
  }, [count]); // Зависимости

  return <p>Count: {count}</p>;
};

export default Timer;
