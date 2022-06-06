import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="light-blue darken-1">
            <div className="nav-wrapper container">
                <a href="/" className="brand-logo">
                    React+ Typescript
                </a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a href="/">To-do list</a>
                    </li>
                    <li>
                        <a href="/">Information</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export { Navbar };
