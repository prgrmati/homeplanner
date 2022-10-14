import React from 'react';

import PiggyBank from '@/assets/icons/piggybank.svg';

type TIcon = {
    name: string;
    color?: string;
    size?: number;
};

const icons = {
    piggybank: PiggyBank
};

const Icon: React.FC<TIcon> = ({ name, color = '#000', size = 24 }): JSX.Element => {
    const IconName = icons[name];

    return (
        <div>
            <img src={`/assets/icons/${name}.png`} width={size} height={size} />
        </div>
    );
};

export default Icon;
