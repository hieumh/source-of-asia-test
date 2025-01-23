import { FC } from 'react';
import Banner from './banner/Banner.component';
import TitleBlockOne from './block-one/TitleBlockOne.component';
import TitleBlockTwo from './block-two/TitleBlockTwo.component';

const Home: FC = () => {
  return (
    <>
      <Banner />

      <TitleBlockOne />

      <TitleBlockTwo />
    </>
  );
};

export default Home;
