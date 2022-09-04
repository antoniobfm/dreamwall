import React, { useEffect } from 'react';

import { Container } from '@/modules/dashboard/styles';
import Wall from '@/modules/dashboard/Wall';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { wallsSlice } from '@/redux/walls.reducer';
import Report from '@/modules/dashboard/Report';
import Head from 'next/head';

const Home: React.FC = () => {
  const walls = useSelector((state: RootState) => state.wall.walls);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wallsSlice.actions.addWindow({ wallIndex: 1 }));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Dreamwall</title>
      </Head>
      <Container>
        <h1 style={{ paddingBottom: 40 }}>Dreamwall</h1>
        <div className="walls">
          {walls.map((_wall, index) => (
            <Wall index={index} key={`wall${index}`} />
          ))}
        </div>
        <Report />
      </Container>
    </>
  );
};

export default Home;
