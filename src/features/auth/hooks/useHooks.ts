import * as api from "@/config/axios"
import { useMutation } from "@tanstack/react-query"


export const userRegister = () => {
    return useMutation({
        mutationKey: ["register"],
        mutationFn: (data:FormData) => api.register(data),
        retry:0
    })
}

export const userLogin = () => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: (data:FormData) => api.login(data),
        retry:0
    })
}