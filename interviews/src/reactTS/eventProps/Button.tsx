type buttonProps = {
    //handleClick: () => void //without passing event
    //with event
    //handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void

    //with pasing id 
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
const Button = (props: buttonProps) => {
    return (
        <div>
            <button onClick={(event) => props.handleClick(event, 2)}> Clieck here</button>
        </div>
    );
};

export default Button;