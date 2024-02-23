import {apiService} from "./apiService";
import {AxiosResponse} from "axios";

const authService = {
    async login(): Promise<void> {
        const {data} = await apiService.post<{ access: string }>('auth/login');

        const auth:Promise<AxiosResponse<{access:string}>> = apiService.post<{ access: string }>('auth/login');
        this.setToken(data.access)
    },
    setToken(token: string): void {
        localStorage.setItem('token', token)
    },
    getToken(): string {
        return localStorage.getItem('token')
    }
}


const asd = async ()=>{}

asd()
apiService.post<{ access: string }>('auth/login');