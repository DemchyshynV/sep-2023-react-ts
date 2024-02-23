import {createContext, FC, PropsWithChildren, ReactNode} from "react";

const FirstContext = createContext<number>(null)
const SecondContext = createContext<{ name: string }>(null)


interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {
    return (
        <FirstContext.Provider value={555}>
            <SecondContext.Provider value={{name: 'Max'}}>
                {children}
            </SecondContext.Provider>
        </FirstContext.Provider>
    );
};

export {
    ContextProvider,
    FirstContext,
    SecondContext
};