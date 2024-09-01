import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";
["fireEvent"]
test("render todo list component",()=>{
  render(<TodoList/>)
})
const input = getByPlaceholderText('todo name');
  fireEvent.change(input, { target: { value: 'New Todo' } });