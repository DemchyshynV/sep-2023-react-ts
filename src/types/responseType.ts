import {AxiosResponse} from "axios";
import {ICar} from "../interfaces/carInterface";

type IRes<T> = Promise<AxiosResponse<T>>

export type {
    IRes
}