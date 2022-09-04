/* eslint-disable react/jsx-props-no-spreading */
import Input from '@/components/Input';
import { RootState } from '@/redux/store';
import { wallsSlice } from '@/redux/walls.reducer';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { SubmitFormButton, Container } from './styles';

interface IFormInput {
  height: number;
  width: number;
}

interface IWall {
  index: number;
}

const Wall: React.FC<IWall> = ({ index }) => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  const {
    register,
    setError,
    clearErrors,
    formState: { errors, isValid, dirtyFields, isSubmitted },
    handleSubmit,
  } = useForm<IFormInput>({ mode: 'all' });

  const wall = useSelector((state: RootState) => state.wall.walls[index]);
  const dispatch = useDispatch();

  const validate = useCallback(() => {
    if (!height || !width) {
      return true;
    }
    const area = height * width;

    if (area > 500000) {
      setError('height', {
        type: 'min',
        message: 'Area maxima de 50m²',
      });

      setError('width', {
        type: 'min',
        message: 'Area maxima de 50m²',
      });

      return false;
    }
    if (area < 1000) {
      setError('height', {
        type: 'min',
        message: 'Area minima de 1m²',
      });

      setError('width', {
        type: 'min',
        message: 'Area minima de 1m²',
      });

      return false;
    }
    clearErrors('width');
    clearErrors('height');

    return true;

    return true;
  }, [height, width, setError, clearErrors]);

  const handleSaveDimensions = (data: IFormInput) => {
    dispatch(wallsSlice.actions.saveDimensions({ ...data, wallIndex: index }));
  };

  if (wall.dimensionsSaved) {
    return (
      <Container haveError={false}>
        <div data-test={`header-${index}`} className="header">
          <h2>Parede {index + 1}</h2>
          <span>
            {wall.height / 100}m/L - {wall.width / 100}m/A
          </span>
        </div>
        <div className="doors-windows-wrapper">
          <div>
            <h2>{wall.doors}</h2>
            <h3>Portas</h3>
            <div className="buttons">
              <button
                type="button"
                onClick={() =>
                  dispatch(wallsSlice.actions.removeDoor({ wallIndex: index }))
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() =>
                  dispatch(wallsSlice.actions.addDoor({ wallIndex: index }))
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18V6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <h2>{wall.windows}</h2>
            <h3>Janelas</h3>
            <div className="buttons">
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    wallsSlice.actions.removeWindow({ wallIndex: index }),
                  )
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() =>
                  dispatch(wallsSlice.actions.addWindow({ wallIndex: index }))
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18V6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container
      haveError={
        ((!!dirtyFields.width && !!dirtyFields.height) || isSubmitted) &&
        !isValid
      }
    >
      <h2>Parede {index + 1}</h2>

      <form onSubmit={handleSubmit(handleSaveDimensions)}>
        <h3>Altura</h3>
        <Input
          dataTest={`height-input-${index}`}
          register={{
            ...register('height', {
              required: 'Parede deve ter altura',
              min: 0,
              value: height,
              onChange: e => setHeight(e.target.value),
              validate: () => validate(),
            }),
          }}
        />
        {errors.height && (
          <span data-test={`error-message-height-${index}`}>
            {errors.height.message}
          </span>
        )}

        <h3 style={{ paddingTop: 16, paddingBottom: 16 }}>Largura</h3>
        <Input
          dataTest={`width-input-${index}`}
          register={{
            ...register('width', {
              required: 'Parede deve ter largura',
              min: 0,
              value: width,
              onChange: e => setWidth(e.target.value),
              validate: () => validate(),
            }),
          }}
        />
        {errors.width && <span>{errors.width.message}</span>}

        <SubmitFormButton
          data-test={`button-${index}`}
          style={{ marginTop: 32 }}
          type="submit"
          disabled={!isValid}
        >
          SALVAR
        </SubmitFormButton>
      </form>
    </Container>
  );
};

export default Wall;
