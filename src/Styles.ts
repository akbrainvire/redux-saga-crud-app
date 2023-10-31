import styled from "styled-components";

export const List = styled.li`
  text-align: center;
  list-style: none;
  list-style-type: none;
  padding: 50px;
  background-color: #fff398;
  color: black;
  border-radius: 20px;
  margin: 10px;
`;

export const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin: 0;
  padding: 10px;
`;

export const Heading = styled.span`
  color: black;
  font-size: 3rem;
  text-align: center;
`;

export const UserContainer = styled.div`
  flex: 1;
`;

export const Container = styled.div<{ $row?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$row ? "row" : "column")};
  flex: 1;
  margin: 10px;
  margin-bottom: 50px;
  width: 100%;

  /* align-items: center; */
`;

export const Button = styled.button<{ $marginR?: string; $marginL?: string }>`
  flex: 1;
  color: black;
  background-color: #ffd0d0;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  margin-right: ${(props) => (props.$marginR ? props.$marginR : 0)};
  margin-left: ${(props) => (props.$marginL ? props.$marginL : 0)};
  cursor: pointer;
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const FormContainer = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: column;
`;

export const Input = styled.input<{ icon?: string }>`
  border: 1px solid black;
  padding: 15px;
  outline: none;
  margin: 1vw 0;
  box-sizing: border-box;
`;
