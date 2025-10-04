import React, { useState } from "react";

export default function Power3Button() {
    const [value, setValue] = useState(1);
    const multiply = () => setValue(value * 3);

    return (
        <button
            onClick={multiply}
            style={{
                padding: "12px 24px",
                fontSize: "18px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#4f46e5",
                color: "white",
                cursor: "pointer",
            }}
        >
            {value}
        </button>
    );
}
