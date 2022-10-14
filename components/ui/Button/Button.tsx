import styles from './Button.module.css';

type TButton = {
    text: string;
    type?: string;
    onClick: () => void;
};

export const Button: React.FC<TButton> = ({ text, type, onClick }): JSX.Element => {
    const handleClick = (): void => {
        onClick();
    };

    const getType = (): string => {
        switch (type) {
            case 'delete':
                return '#ff4d4fb5';
            case 'success':
                return '#29d31559';
            case 'default':
                return '#aebbec';
            default:
                return '#fff';
        }
    };

    return (
        <button
            className={styles.button}
            style={{ backgroundColor: getType() }}
            type="button"
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Button;
