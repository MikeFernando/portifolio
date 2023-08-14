import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme['green-500']};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme['green-500'])};
    }
  }

  body {
    background: ${props => props.theme.white};
    font: 400 1rem 'Montserrat', sans-serif;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;

    @media(max-width:1200px) {
      max-width: 1200px;
    }
    @media(max-width:1000px) {
      max-width: 800px;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }
`;
