import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;

    background: var(--Light-200);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: Montserrat;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  :root {
    /* cores primarias */
    --Blue-600: #0052CC;
    --Red-500: #FF000A;
    --Dark-900: #091E42;
    --Light-0: #FFF;

    /* cores secundarias */
    --Green-500: #36B37E;
    --Yellow-500: #FFAB00;
    --Purple-500: #6554C0;

    /* cores Neutras
      tons escuros */
    --Dark-900: #091E42;
    
    --Dark-800: #172B4D;
    --Dark-700: #253858;
    --Dark-600: #344563;
    --Dark-500: #42526E;

    /* tons medianos */
    --Mid-900: #505F79;
    --Mid-800: #5E6C84;

    --Mid-700: #6B778C;
    
    --Mid-600: #97A0AF;
    --Mid-500: #A5ADBA;
    --Mid-400: #B3BAC5;

    /* tons claros */
    --Light-500: #C1C7D0;
    --Light-400: #DFE1E6;
    --Light-300: #EBECF0;
    --Light-200: #F4F5F7;
    --Light-100: #FAFBFC;
  }
`;