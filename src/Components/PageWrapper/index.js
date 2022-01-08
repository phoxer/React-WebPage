import React from 'react';
import Container from '@mui/material/Container';
import LogIn from 'Modules/LogIn';

const PageWrapper = ({children}) => {
    return (<Container>
        {children}
        <LogIn />
    </Container>)
}

export default PageWrapper;