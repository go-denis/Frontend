import React, { useState, useCallback } from 'react';
import Button from '@mui/material/Button';

/*
useCallback

useCallback — это хук, который возвращает мемоизированную версию функции, которая сохраняется между рендерами.
Это полезно для оптимизации производительности, когда функции передаются в дочерние компоненты в качестве пропсов.
 */

const Button = React.memo(({ onClick }) => {
    console.log('Button rendered');
    return <Button variant="outlined" onClick={onClick}>Click me</Button>;
});

const Parent = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(c => c + 1);
    }, []); // Пустой массив зависимостей

    return (
        <div>
            <p>Count: {count}</p>
            <Button onClick={increment} />
        </div>
    );
};

export default Parent;
