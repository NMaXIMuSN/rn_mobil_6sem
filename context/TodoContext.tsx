import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export interface ITodoItem {
  id: number;
  createdAt: Date;
  text: string;
  close: boolean;
}

interface TodoContext {
  todo: ITodoItem[];
  setTodo: Dispatch<SetStateAction<ITodoItem[]>>;
}

export const TodoContext = createContext<TodoContext>({} as TodoContext)

interface RProps {
  children: ReactNode;
}

export const TodoContextProvider = ({children}: RProps) => {
  const [todo, setTodo] = useState<ITodoItem[]>([])

  const value: TodoContext = {
    setTodo,
    todo,
  }
  return <TodoContext.Provider value={value}>
    { children }
  </TodoContext.Provider>
}