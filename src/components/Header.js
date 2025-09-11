import React from "react";

function Header({ refresh }) {
    return (
        <header>
            <h1 onClick={refresh}>Notepad</h1>
        </header>
    );
}

export default Header;