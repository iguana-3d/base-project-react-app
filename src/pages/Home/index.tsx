import React from 'react';
import Gallery from './Gallery';
import { HomeContainer } from './styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Gallery />
    </HomeContainer>
  );
};

export default Home;
