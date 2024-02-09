import {Dispatch, SetStateAction} from "react";

type ISetState<T> = Dispatch<SetStateAction<T>>

export type {
    ISetState
}