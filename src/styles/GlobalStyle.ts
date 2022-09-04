import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:not(input, textarea){
    -webkit-touch-callout: none;
    -webkit-user-select: none; // locks fields on Safari
    -khtml-user-select: none; // locks fields on Safari
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'futura-pt', Arial, Helvetica, sans-serif;

		::-webkit-scrollbar {
			display: none;
		}
  }

  :root {
		font-size: 14px;
  }

  h1 {
    font-size: 1.777rem;
    font-style: normal;
    font-weight: 700;
  }

  h2 {
    font-size: 1.777rem;
    font-style: normal;
    font-weight: 700;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 1rem;
    line-height: 17px;
  }

  span {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
  }

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  button {
    font-family: 'futura-pt', Arial, Helvetica, sans-serif;
  }

  body:not(.user-is-tabbing) button:focus,
	body:not(.user-is-tabbing) input:focus,
	body:not(.user-is-tabbing) select:focus,
	body:not(.user-is-tabbing) textarea:focus {
		outline: none;
	}
`;
