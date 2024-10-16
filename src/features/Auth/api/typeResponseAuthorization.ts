type TResponseLogin = {

}

type TResponseRegister = {
    message: string,
    data: {
        username: string,
        email: string
    }
}