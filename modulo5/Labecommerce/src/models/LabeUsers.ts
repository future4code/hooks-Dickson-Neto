

export class LabUsers {
    private id? : string

    constructor(
        private name : string,
        private email: string,
        private password: string
    ) {

        if (!this.id) {
            this.id = this.id = String(Date.now())  as string
        }
    }
}