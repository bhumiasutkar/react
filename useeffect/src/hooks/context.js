import { createContext } from "react";

const data = {
    name: 'Bhumi Asutkar',
};

export const MyContext = createContext(data);

const ContextProvider = ({ children }) => {

    return (
        <MyContext.Provider value={'Bhumi'}>
            {children}
        </MyContext.Provider>
    );
};


export default ContextProvider;
