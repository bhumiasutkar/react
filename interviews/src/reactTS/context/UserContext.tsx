import { createContext, useState } from "react";

//for user details
export type UserDetailType = {
    name: string
    email: string
}

type UserContextType = {
    isUser: UserDetailType | null
    setIsUser: React.Dispatch<React.SetStateAction<UserDetailType | null>>
}

//for props
type UserProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProviderProps) => {

    const [isUser, setIsUser] = useState<UserDetailType | null>(null);
    return (
        <UserContext.Provider value={{ isUser, setIsUser }}>{children}</UserContext.Provider>
    )
}