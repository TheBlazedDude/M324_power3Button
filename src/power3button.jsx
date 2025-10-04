import React, { useState } from "react";

export default function Power3Button() {
    const [value, setValue] = useState(3);
    const multiplyH3 = () => setValue(value * value * value);

    return (
        <button
            onClick={multiplyH3}
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
