import React from "react";

function Todo({ title, completed }) {

    return (
        <li>
            {title} - {completed ? "Completed" : "Not Completed"}
        </li>
    )

}

export default Todo;