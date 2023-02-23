import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OurPartner from '../OurPartner/OurPartner';
import Header from '../shared/Header/Header';
import'./OurPartners.css'

const OurPartners = () => {

    const ourPartners = useLoaderData()
    return (

        <>
            <div>
                <Header />
            </div>

            <div className='partners-div'>

                {
                    ourPartners.map(ourPartner => <OurPartner
                        key={ourPartner.id}
                        ourPartner={ourPartner}>

                    </OurPartner>)
                }
            </div>
        </>
    );
};

export default OurPartners;