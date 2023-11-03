import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  max-width: 200px;
  height: 2.75rem;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #101010;
  background: #f7f7f7;
  border: none;
  border-radius: 10px;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    transform: scale(1.05, 1.15);
  }
`;

export { Button };
