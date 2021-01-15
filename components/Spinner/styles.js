import css from "styled-jsx/css";

export default css`
  div {
    animation: spin 1s linear infinite;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-left-color: transparent;
    height: 36px;
    width: 36px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
