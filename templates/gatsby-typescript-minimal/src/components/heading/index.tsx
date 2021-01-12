import React, { ReactNode } from 'react';

interface TitleProps {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
}

const Heading: React.FC<TitleProps> = ({ children, as = 'h1' }) => {
    const Tag = as;
    return <Tag>{children}</Tag>;
};

export default Heading;
