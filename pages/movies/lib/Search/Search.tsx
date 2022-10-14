import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import React, { useRef } from 'react';
import { useState } from 'react';
import styles from './Search.module.css';

type TSearch = {
    onSearch: (query: string) => void;
};

const Search: React.FC<TSearch> = ({ onSearch }): JSX.Element => {
    const [query, setQuery] = useState<string>('');
    //const formRef = useRef();

    const ref = useRef(null);

    const handleSearch = (): void => {
        onSearch(query);
    };

    const handleClear = (): void => {
        setQuery('');
        onSearch('');
        //@ts-ignore
        //formRef?.current?.reset();
        ref.current.value = '';

        // var event = new Event('change', { bubbles: true });
        // ref.current.dispatchEvent(event);
    };

    return (
        <div className={styles['search-wrapper']}>
            <strong>Search:</strong>
            <div className={styles['search-inputs']}>
                {/* <Input
                    placeholder="Search library..."
                    type="text"
                    //@ts-ignore
                    ref={nodeRef}
                    onChange={(value) => setQuery(value)}
                /> */}
                <input
                    type="text"
                    placeholder="Search library..."
                    ref={ref}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                />
                <Button type="default" text="Search" onClick={() => handleSearch()} />
                {query && <Button text="Clear" onClick={() => handleClear()} />}
            </div>
        </div>
    );
};

export default Search;
