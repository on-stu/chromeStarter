import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineEdit } from "react-icons/ai";
import Button from "./Button";
import Bookmark from "./Bookmark";
import { FC } from "react";

type todoType = { title: string; url: string; favicon?: string };
interface Props {
  todo: todoType[];
}

const Todos: FC<Props> = ({ todo }) => {
  return (
    <Container>
      <div className="buttons">
        <Button onClick={() => {}}>
          <AiOutlineEdit />
        </Button>
        <Button onClick={() => {}}>
          <AiOutlinePlusCircle />
        </Button>
      </div>
      <div className="content">
        {todo.map((i, e) => (
          <Bookmark key={e} />
        ))}
      </div>
    </Container>
  );
};

export default Todos;

const Container = styled.div`
  width: 70%;
  height: 100% !important;
  background-color: rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  .buttons {
    width: 100% !important;
    height: 12px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    column-gap: 12px;
    align-items: center;
    color: whitesmoke;
    font-size: 20px;
  }
  .content {
    color: whitesmoke;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    row-gap: 32px;
  }
`;
