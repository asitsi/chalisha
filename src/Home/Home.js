import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (

    <div className='container'>
      {/* TODO : Add SEO ( Using helmet) add title discription & search tag */}
       <Helmet>
                <meta charSet="utf-8" />
                <title>Chalisha's</title>
                <link rel="canonical" href="../assests/image/favicon.ico" />
            </Helmet>
      {/* TODO : Add SEO ( Using helmet) add title discription & search tag */}
      <Header text={'Chalisha List'} />
      <div className='mainCards'>
        <Link to={'/chalisha/hanumaan'}>
          <Card imageUrl="https://cdn.pixabay.com/photo/2021/02/09/13/02/hanuman-5998491_1280.jpg" />
        </Link>
        <Link to={'/chalisha/shani'}>
          <Card imageUrl="https://e1.pxfuel.com/desktop-wallpaper/873/825/desktop-wallpaper-dev-lord-shani-thumbnail.jpg" />
        </Link>
        <Link to={'/chalisha/shani'}>
          <Card imageUrl="https://e1.pxfuel.com/desktop-wallpaper/873/825/desktop-wallpaper-dev-lord-shani-thumbnail.jpg" />
        </Link>
        <Link to={'/mantra/all'}>
          <Card imageUrl="../assests/image/mantra.png" />
        </Link>
      </div>
    </div>
  )
}

export default Home;

const Card = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={`${imageUrl}`} className="card-image" />
    </div>
  );
};