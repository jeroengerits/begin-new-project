import React from 'react';
import { Heading, Text, MenuButton } from 'theme-ui';
import CustomBox from '../components/custom-box';

const Home: React.FC = () => (
    <main>
        <MenuButton aria-label="Toggle Menu" />
        <Heading>Welcome to Typescript with Gatsby & Theme UI</Heading>
        <Text>A TypeScript starter.</Text>
        <CustomBox>Beep</CustomBox>
    </main>
);

export default Home;
