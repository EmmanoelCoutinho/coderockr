import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  background: linear-gradient(90deg, #f1a10a 0%, #342303 100%);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100px;

  color: #fff;
  background: #2d2d2d;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.25rem;
    font-weight: 700;
  }

  div {
    display: flex;
    gap: 2.5rem;
  }

  span {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;
