import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import ClientRepository from "../core/ClientRepository";
import CollectionClient from "../backend/db/CollectionClient";

export default function Home() {

  const [client, setClient] = useState<Client>(Client.void())
  const [clients, setClients] = useState<Client[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const repo: ClientRepository = new CollectionClient()

  useEffect(obterTodos, [])

  function obterTodos() {

    repo.AllUsers().then(clients => {

      setClients(clients)
      setVisivel('tabela')

    })
  }

  function clientSelect(client: Client) {

    setClient(client)
    setVisivel('form')

  }

  async function deleteClient(client: Client) {

    await repo.delete(client)
    obterTodos()
  }



  function newClient() {

    setClient(Client.void())
    setVisivel('form')

  }
  async function saveClient(client: Client) {

    await repo.save(client)
    obterTodos()
  }

  return (
    <div className={`
    flex 
    h-screen
     justify-center 
     items-center
     bg-gradient-to-r from-purple-950 to-red-700
     text-white
     `}>

      <Layout titulo="Cadastro simples">
        {visivel === 'tabela' ? (

          <>
            <div className="flex justify-end">

              <Button cor="green" className="mb-4" onClick={newClient}>Novo Cliente</Button>

            </div>



            <Table clients={clients} clientSelect={clientSelect}
              clientDelete={deleteClient}
            />
          </>

        ) : (

          <Form client={client} clientChanged={saveClient} cancel={() => setVisivel('tabela')}></Form>

        )}
      </Layout>

    </div>
  )
}
