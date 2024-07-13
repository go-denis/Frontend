import {useState} from "react";
import Button from '@mui/material/Button';

/*
useState

useState — это хук, который позволяет добавлять состояние в функциональные компоненты. Он возвращает текущее состояние и функцию для его обновления.
 */
function CounterAndHookUseState() {
    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount(count + 2);
    }

    return (
        <div>
            <span>{count}</span>
            <Button onClick={() => {setCount(prevState => ++prevState)}}>click +1</Button>
            <Button onClick={updateCount}>click +2</Button>
        </div>
    );
}

export default CounterAndHookUseState;