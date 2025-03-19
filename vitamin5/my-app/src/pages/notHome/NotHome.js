import { useState, useEffect } from 'react';
import Title from './NotHome/Title';

const NotHome = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    useEffect(() => {
        if (count < 0) {
            setCount(0);
        } else if (count > 5) {
            alert('You passed 5!');
        }
    }, [count]);

    return (
        <div>
            <Title />
            <div>
                <p>Counter: {count}</p>
                <button onClick={increment}>Increase</button>
                <button onClick={decrement}>Decrease</button>
            </div>
        </div>
    );
};

export default NotHome;