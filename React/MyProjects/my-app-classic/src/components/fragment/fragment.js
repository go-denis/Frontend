import React from 'react';

const ListComponent = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <ul>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <li>{item}</li>
                    <li>Additional Info</li>
                </React.Fragment>
            ))}
        </ul>
    );
};

//Старый вариант
const MyComponent1 = () => {
    return (
        <React.Fragment>
            <h1>Title</h1>
            <p>This is a paragraph.</p>
        </React.Fragment>
    );
};

//Новый вариант
const MyComponent = () => {
    return (
        <>
            <h1>Title</h1>
            <p>This is a paragraph.</p>
        </>
    );
};

export default ListComponent;
