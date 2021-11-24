import { personProps } from './PropTypes';

type GreetProps = {
    name: string,
    msgCount?: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { msgCount = 0 } = props;
    return (
        <div>
            {props.isLoggedIn ? `<h2>Welcom ${props.name} and msg count is ${msgCount}</h2>` : "Welcome guest"}

        </div>
    );
}

// type personProps = {
//     name: {
//         first: string,
//         last: string
//     }
// }
export const Person = (props: personProps) => {
    return (
        <>
            <h3>Hello {props.name.first} {props.name.last}</h3>
        </>
    )
}

type listProps = {
    names: {
        first: string,
        last: string
    }[]
}
export const PersonList = (props: listProps) => {
    return (
        <>
            {props.names.map(name => {
                return (
                    <h3 key={name.first}>Hello {name.first} {name.last}</h3>
                )
            })}
        </>
    )
}

