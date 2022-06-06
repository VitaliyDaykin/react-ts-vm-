import { useState } from "react";

interface TodoFormsPros {
    onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormsPros> = (props) => {
    const [title, setTitle] = useState<string>("");

    const hendlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value);
    };

    const hendlerKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
        e
    ) => {
        if (e.key === "Enter") {
            props.onAdd(title);
            setTitle("");
        }
    };

    return (
        <>
            <div className="input-field" style={{ marginTop: "30px" }}>
                <input
                    onChange={hendlerChange}
                    value={title}
                    type="text"
                    id="title"
                    placeholder="Enter case name"
                    onKeyDown={hendlerKeyDown}
                />
                <label htmlFor="title" className="active">
                    Enter case name
                </label>
            </div>
        </>
    );
};

export { TodoForm };
