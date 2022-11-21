import React, { useState } from 'react';
import BodySection from '../components/bodySection/BodySection';
import Header from '../components/common/Header'

const Home = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Header
                setOpen={setOpen}
                open={open}
            />
            <BodySection
                open={open}
                setOpen={setOpen}
            />
        </>
    );
};

export default Home;