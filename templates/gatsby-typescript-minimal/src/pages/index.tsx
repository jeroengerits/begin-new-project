import React from 'react';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';

const Home: React.FC = () => (
    <main>
        <Heading as="h1">Welcome to Typescript</Heading>
        <Paragraph>A TypeScript starter for Gatsby.</Paragraph>
    </main>
);

export default Home;
