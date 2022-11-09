export class BaseError extends Error {
    constructor(public statusCode: number, message: string) {
        super(message)
    }
}

export class InvalidToken extends BaseError{
    constructor(){
        super(415, "Access token required")
    }
}


export class InvalidEmail extends BaseError{
    constructor() {
        super(415, "invalid email is required to have '@'")
    }
}

export class invalidUserEmail extends BaseError{
    constructor() {
        super(404, "This email is already registered")
    }
}

export class InvalidPassword extends BaseError{
    constructor() {
        super(415, "Invalid password must be longer than 6 characters")
    }
}

export class invalidFields extends BaseError{
    constructor(){
        super(415 , "Incorrect email or password")
    }
}


export class RequiredFiels extends BaseError{
    constructor() {
        super(400, "Enter all required fields'")
    }
}

export class RegisteredEmail extends BaseError{
    constructor() {
        super(400, "Email already registered'")
    }
}