import { ErrorType } from "./error.type";

export interface SignInActionPayloadRequest {
    email: string
    password: string
}

export interface SignInActionPayloadSuccess {
    userIsAuthentificated: boolean
}

export interface SignInInitialStateType {
    userIsAuthentificated: boolean
    signinError: ErrorType | null
}