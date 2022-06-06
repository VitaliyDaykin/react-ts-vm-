import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
    todos: ITodo[];
    onToglle(id: number): void;
    onRemuve: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemuve, onToglle }) => {
    return (
        <>
            <ul>
                {todos.map((todo) => {
                    const classes = ["todo"];
                    console.log(classes);
                    if (todo.completed == true) {
                        classes.push("completed");
                    }
                    console.log(todo.completed);

                    return (
                        <li className={classes.join(" ")} key={todo.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => onToglle(todo.id)}
                                />
                                <span>{todo.title}</span>
                                <i
                                    className="material-icons red-text"
                                    onClick={() => onRemuve(todo.id)}
                                >
                                    delete
                                </i>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export { TodoList };
