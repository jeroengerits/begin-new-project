import React from 'react';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';

const NotFound: React.FC = () => (
    <main>
        <Heading as="h1">404</Heading>
        <Paragraph>Sorry, page not found!</Paragraph>
    </main>
);

export default NotFound;
