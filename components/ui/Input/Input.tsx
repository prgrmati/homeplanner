import { forwardRef, useRef, useState } from 'react';
import styles from './Input.module.css';

type TInput = {
    type: 'text' | 'email' | 'number' | 'password' | 'search' | 'date';
    placeholder?: string;
    reference?: any;
    onChange: (value: string) => void;
    onFocus?: () => void;
};

export const Input: React.FC<TInput> = ({
    type,
    placeholder = '',
    reference,
    onChange,
    onFocus
}): JSX.Element => {
    const [value, setValue] = useState<string>('');

    const inputRef = useRef(reference);

    const handleChange = (e): void => {
        const { value } = e.target;
        setValue(value);
        onChange(value);
    };

    return (
        <input
            className={styles.input}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default Input;
