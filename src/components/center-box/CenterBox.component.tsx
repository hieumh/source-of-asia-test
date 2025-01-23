import { Box, BoxProps } from '@mui/material';
import { FC, ReactNode } from 'react';

interface ICenterBoxProps extends BoxProps {
   children: ReactNode; 
}

const CenterBox: FC<ICenterBoxProps> = ({children, ...rest}) => {
    return <Box maxWidth="77.5rem" width="100%" mx="auto" {...rest}>{children}</Box>;
}

export default CenterBox;