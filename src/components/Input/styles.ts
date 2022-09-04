import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 16px;

  border: 1px solid rgba(185, 200, 214, 0.5);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: 0.3s all;

  input {
    outline: none;
    border: none;
    background: none;

    font-family: 'futura-pt';

    width: 100%;
    height: 56px;

    padding-right: 24px;

    color: ${props => props.theme.colors.text};
  }

  span {
    font-family: 'futura-pt';
    font-weight: 700;

    color: ${props => props.theme.colors.text_medium_emphasis};

    transition: 0.3s all;
  }

  :focus-within {
    border-color: #000;

    span {
      color: ${props => props.theme.colors.text};
    }
  }
`;
