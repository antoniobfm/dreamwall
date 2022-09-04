import styled from 'styled-components';

export const Container = styled.aside`
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;

  @media (min-width: 768px) {
    margin-bottom: 24px;

    .report {
      width: calc(100% - 48px);
      max-width: calc(1000px - 48px);

      border: 1px solid #ebebeb;
      border-radius: 8px;

      margin: 0px auto;
    }
  }

  .report {
    background: #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);

    padding: 24px 0px;

    border-top: 1px solid #ebebeb;

    h1 {
      padding-left: 16px;
    }

    .scroll {
      width: 100vw;

      padding: 16px 16px 1px;

      display: flex;
      flex-direction: row;

      column-gap: 16px;

      overflow-x: scroll;
      overflow-y: visible;

      ::-webkit-scrollbar {
        display: none;
      }

      .item {
        flex-shrink: 0;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 16px 0px 0px;
        gap: 16px;

        background: #ffffff;
        box-shadow: 0 0 0px 1px #000;
        border-radius: 8px;

        .item-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 8px 16px;
          gap: 8px;

          background: #000000;
          border-radius: 8px;

          > span {
            font-weight: 700;
            color: #ffffff;
          }
        }
      }
    }
  }

  .finish-filling {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      width: calc(100% - 48px);
      max-width: calc(1000px - 48px);

      border-radius: 8px;
    }

    span {
      color: #ffffff;
    }
  }
`;
