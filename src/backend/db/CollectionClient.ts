import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";
import firebase from "../config";

export default class CollectionClient implements ClientRepository {

    #converter = {

        toFirestore(client: Client) {

            return {
                nome: client.nome,
                idade: client.idade

            }

        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
            const dados = snapshot.data(options)
            return new Client(dados.nome, dados.idade, snapshot.id)
        }


    }

    async save(client: Client): Promise<Client> {

        if (client?.id){

            await this.colecao().doc(client.id).set(client)
            return client

        } else {

               const docRef = await this.colecao().add(client)
               const doc = await docRef.get()
               return doc.data()

        }
    }
    async delete(client: Client): Promise<void> {
        return this.colecao().doc(client.id).delete()

    }

    async AllUsers(): Promise<Client[]> {

        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []

    }

    private colecao() {

        return firebase.firestore().collection('clientes').withConverter(this.#converter)

    }

}