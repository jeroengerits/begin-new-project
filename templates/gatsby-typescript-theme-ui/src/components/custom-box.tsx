import React, { ReactNode } from 'react';
import { Box } from 'theme-ui';

interface ParagraphProps {
    children: ReactNode;
}

const CustomBox: React.FC<ParagraphProps> = ({ children }) => {
    return (
        <Box bg="primary" p={4} color="white">
            {children}
        </Box>
    );
};

export default CustomBox;
