import React from 'react';

type styleProps = {
    styles: React.CSSProperties
}
const StyleProp = (props: styleProps) => {
    return (
        <div style={props.styles}>
            <h1>Hello</h1>
        </div>
    );
}

export default StyleProp;