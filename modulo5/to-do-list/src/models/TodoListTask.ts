
export class UserTask{
    private id?: string
    constructor(
      private titulo: string,
      private limit_date: string,
      private criador_user_id: string,
      private status: string,
      private descrição: string,
    
  
    ) {
      if (!this.id) {
        this.id = this.id = String(Date.now())  as string
      }
    }
  }
  