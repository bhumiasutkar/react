import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/theme';

function ThemeButton () {
    const theme = useContext(ThemeContext);
    const [isDark, setIsdark] = useState(false);
    let style;
    const handleClick = () => {
        setIsdark(!isDark);
    };
    if (isDark) {
        style = { background: theme.light.background, color: theme.light.foreground };
    } else {
        style = { background: theme.dark.background, color: theme.dark.foreground };
    }

    return (
        <button style={style} onClick={() => handleClick()} >
            I am styled by theme context!
        </button>
    );
}

export default ThemeButton;