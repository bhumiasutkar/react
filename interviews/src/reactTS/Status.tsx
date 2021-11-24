type statusProps = {
    children: React.ReactNode
}
export const Status = (props: statusProps) => {
    return (
        <div>
            {props.children}
        </div>
    );
}

type fixedVal = {
    myStatus: 'loading' | 'success' | 'error'
}
export const UnionValue = (props: fixedVal) => {
    let msg = "Nothing";
    if (props.myStatus === "success") {
        msg = "Success";
    } else if (props.myStatus === "loading") {
        msg = "Its loading ...."
    } else {
        msg = "error"
    }
    return (
        <div>
            <h2>{msg}</h2>
        </div>
    )
}