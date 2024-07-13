import React, { useRef, useEffect } from 'react';

/*
useRef

useRef — это хук, который возвращает изменяемый ref-объект, который сохраняется при повторных рендерах.
Это полезно для хранения любых изменяемых значений, таких как DOM-элементы или сохранение значений между рендерами без их повторного вычисления.
 */

const FocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} />;
};

export default FocusInput;
