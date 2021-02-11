import React from 'react';
import { Link } from "react-router-dom";
import PageWrapper from 'Components/PageWrapper';

const HomePage = () => {
    return (<PageWrapper>
        Hi Home!! <Link to="/sample1">Sample1</Link>
    </PageWrapper>)
}

export default HomePage;