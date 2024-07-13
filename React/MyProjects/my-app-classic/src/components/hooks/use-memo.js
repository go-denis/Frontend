import React, { useState, useMemo } from 'react';

/*
useMemo

useMemo — это хук, который возвращает мемоизированное значение, которое изменяется только если изменяются зависимости.
Это полезно для оптимизации вычислений, которые требуют больших затрат ресурсов.
 */

const ExpensiveComputationComponent = ({ num }) => {
    const expensiveComputation = (n) => {
        console.log('Computing...');
        return n * 2;
    };

    const computedValue = useMemo(() => expensiveComputation(num), [num]);

    return (
        <div>
            <p>Computed Value: {computedValue}</p>
        </div>
    );
};

const App = () => {
    const [number, setNumber] = useState(1);

    return (
        <div>
            <ExpensiveComputationComponent num={number} />
            <button onClick={() => setNumber(number + 1)}>Increment</button>
        </div>
    );
};

export default App;
