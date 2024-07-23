import { uuid } from "uuidv4";

export class Event {
  public readonly id: string;

  public title: string;
  public email: string;
  public password: string;

  constructor(props: Omit<Event, "id">, id?: string) {
    // this.title = props.title.....
    Object.assign(this, props);

    // não deixar a responsabilidade da criacao do id do usuário pro DB, como é uma interface externa (camada infra), podemos trocar ou desconfigurar e acabar prejudicando nossa aplicacao;
    if (!id) {
      this.id = uuid();
    }
  }
}
