import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";
test("render todo list component",()=>{
  render(<TodoList/>)
})