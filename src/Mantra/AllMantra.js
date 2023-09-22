import React from 'react'
import { Helmet } from 'react-helmet';

const AllMantra = () => {
    return (
        <div className='container'>
            {/* TODO : Add SEO ( Using helmet) add title discription & search tag */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Mantra</title>
                <link rel="canonical" href="../assests/image/favicon.ico" />
            </Helmet>
            <div className='row'>
                <h1>All Mantra</h1>
                <p><strong className='S-fontSize'>first<br /></strong></p>
                <p><strong className='S-fontSize'>first<br /></strong></p>
            </div>
        </div>
    )
}

export default AllMantra;