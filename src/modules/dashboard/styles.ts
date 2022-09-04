import styled from 'styled-components';

export const Container = styled.main`
  margin: auto;
  min-height: 100vh;
  background-color: white;

  padding: 24px 24px 20vh;

  .walls {
    display: grid;
    grid-gap: 32px;
  }

  @media (min-width: 768px) {
    max-width: 1000px;

    .walls {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
