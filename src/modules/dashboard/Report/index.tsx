/* eslint-disable no-plusplus */
import { cans, door, window } from '@/configs/dimensions';
import { RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, m } from 'framer-motion';

import { Container } from './styles';

const Report: React.FC = () => {
  const [cansNeeded, setCansNeeded] = useState([
    [18, 1],
    [3.6, 1],
    [2.5, 1],
    [0.5, 1],
  ]);

  const walls = useSelector((state: RootState) => state.wall.walls);

  const areWallsDone = useSelector(
    (state: RootState) =>
      state.wall.walls.filter(wall => wall.dimensionsSaved).length === 4,
  );

  useEffect(() => {
    if (areWallsDone) {
      const newCansNeeded = {
        18: 0,
        3.6: 0,
        2.5: 0,
        0.5: 0,
      };

      let paintLeft =
        walls.reduce((acc, wall) => {
          const wallArea = wall.height * wall.width;
          const windowArea = wall.windows * window.width * window.height;
          const doorArea = wall.doors * door.width * door.height;

          const needPaint = wallArea - (windowArea + doorArea);

          return acc + needPaint;
        }, 0) / 50000;

      for (let i = 0; cans.length > i; i++) {
        if (paintLeft === 0) {
          break;
        }

        const currentCan = cans[i];
        const notCoveredByThisCan = paintLeft % currentCan;
        const coveredByThisCan = paintLeft - notCoveredByThisCan;
        paintLeft = notCoveredByThisCan;

        const cansOfThisType = coveredByThisCan / currentCan;

        newCansNeeded[`${currentCan}`] = cansOfThisType;
      }

      if (paintLeft > 0) {
        newCansNeeded['0.5'] += 1;

        if (newCansNeeded['0.5'] === 5) {
          newCansNeeded['2.5'] += 1;
          newCansNeeded['0.5'] = 0;
        }
      }

      const newCansNeededArray = Object.entries(newCansNeeded).map(
        ([key, value]) => [Number(key), value],
      );

      setCansNeeded(newCansNeededArray);
    }
  }, [walls, areWallsDone]);

  return (
    <Container>
      <div className="report">
        <AnimatePresence>
          {!areWallsDone && (
            <m.div
              data-test="report-not-done"
              className="finish-filling"
              initial={{ opacity: 1, background: 'rgba(0, 0, 0, 0.8)' }}
              animate={{ opacity: 1, background: 'rgba(0, 0, 0, 0.8)' }}
              exit={{ opacity: 0, background: 'rgba(0, 0, 0, 0)' }}
            >
              <span>Termine de configurar suas paredes</span>
            </m.div>
          )}
        </AnimatePresence>
        <h1>Latas de tinta</h1>
        <div className="scroll">
          {cansNeeded.map(
            item =>
              item[1] > 0 && (
                <div className="item">
                  <div className="item-header">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.74 5.48003L10.3933 3.13336C8.28667 1.03336 7.18 1.8067 5.84667 3.13336L2.07333 6.9067C1.30667 7.67336 0.886668 8.1667 0.733335 8.71337C0.733335 8.72003 0.726668 8.72003 0.726668 8.72003C0.726668 8.7267 0.726668 8.7267 0.726668 8.7267C0.726668 8.73337 0.726668 8.73337 0.726668 8.73337V8.75337C0.453335 9.7267 1.17333 10.5534 2.07333 11.4534L4.42667 13.7934C5.26667 14.64 5.94667 15.1667 6.7 15.1667C7.45333 15.1667 8.1 14.66 8.96667 13.7934L12.74 10.0267C13.0667 9.69337 13.3067 9.42003 13.4933 9.16003C13.4933 9.15337 13.4933 9.15337 13.4933 9.15337C13.4933 9.15337 13.4933 9.15337 13.5 9.15337C14.3533 7.96003 14.1267 6.86003 12.74 5.48003ZM12.0533 8.08003H12.0467C11.8467 8.03337 11.64 7.99337 11.4333 7.95337C11.42 7.95337 11.4067 7.9467 11.3867 7.9467C10.92 7.86003 10.4467 7.7867 9.96667 7.7267H9.94C9.46 7.6667 8.97333 7.62003 8.48667 7.59337H8.43333C8.00667 7.5667 7.57333 7.55337 7.14667 7.55337C6.62667 7.55337 6.10667 7.58003 5.59333 7.61337C5.50667 7.62003 5.42667 7.6267 5.34667 7.63337C4.96 7.66003 4.57333 7.70003 4.19333 7.7467C4.08667 7.76003 3.98667 7.77337 3.88667 7.7867C3.5 7.8467 3.12 7.9067 2.74 7.98003C2.65333 8.00003 2.57333 8.01337 2.48667 8.0267C2.45333 8.03337 2.41333 8.04003 2.38 8.0467C2.5 7.91337 2.64 7.77337 2.79333 7.62003L6.56 3.85337C7.77333 2.65337 8.18667 2.3667 9.68 3.85337L12.02 6.20003C12.38 6.55337 12.62 6.85337 12.7667 7.11337C12.7667 7.11337 12.7667 7.12003 12.7733 7.12003C13.0533 7.6067 12.6 8.1867 12.0533 8.08003Z"
                        fill="white"
                      />
                      <path
                        d="M13.9667 11.7466C13.7133 11.4333 13.4933 11.1666 13 11.1666C12.5067 11.1666 12.2867 11.4333 12.04 11.7466C11.5067 12.4066 11.2667 13.1266 11.3533 13.82C11.4533 14.6133 12.1333 15.1666 13 15.1666C13.8667 15.1666 14.5467 14.6133 14.6467 13.8133C14.7333 13.12 14.5 12.4066 13.9667 11.7466Z"
                        fill="white"
                      />
                    </svg>

                    <span>{item[0]}L</span>
                  </div>
                  <span>{item[1]} Lata(s)</span>
                </div>
              ),
          )}
        </div>
      </div>
    </Container>
  );
};

export default Report;
