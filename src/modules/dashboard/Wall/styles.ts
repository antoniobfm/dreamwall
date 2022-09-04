import styled from 'styled-components';

interface IProps {
  haveError: boolean;
}

export const Container = styled.div<IProps>`
  background: #ffffff;
  /* Shadow */

  box-shadow: 0px 4px 12px
    ${props =>
      props.haveError ? 'rgba(255, 166, 166, 0.38)' : 'rgba(0, 0, 0, 0.08)'};
  border-radius: 8px;

  padding: 24px 16px 40px;

  border: 1px solid
    ${props => (props.haveError ? 'rgba(255, 166, 166, 1)' : '#ebebeb')};

  transition: 0.3s all;

  > form {
    > h3 {
      padding-top: 16px;
      padding-bottom: 16px;
    }

    > span {
      padding-top: 8px;
      color: rgba(255, 166, 166, 1);
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${props => props.theme.colors.text_medium_emphasis};
    }
  }

  .doors-windows-wrapper {
    margin-top: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      flex: 1;

      > h3 {
        padding-top: 8px;
      }

      .buttons {
        padding-top: 16px;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        column-gap: 16px;

        button {
          outline: none;
          border: none;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 8px;

          background: ${props => props.theme.colors.primary};
          border-radius: 8px;

          transition: 0.3s all;

          :active {
            transform: scale(0.8);
          }

          :hover {
            cursor: pointer;
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export const SubmitFormButton = styled.button`
  width: 100%;
  height: 56px;

  outline: none;
  border: none;

  transition: 0.3s all;

  background: #000000;
  border-radius: 8px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;

  :disabled {
    background: rgba(0, 0, 0, 0.5);

    :hover {
      cursor: initial;
      transform: scale(1);
    }
  }

  :hover {
    cursor: pointer;
  }
`;

export const AddRemoveButton = styled.button``;
