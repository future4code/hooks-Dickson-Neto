

export class newList {
  private id?: string
  constructor(
    private nome: string,
    private apelido: string,
    private email: string,

  ) {
    if (!this.id) {
      this.id = this.id = String(Date.now())  as string
    }
  }
}
