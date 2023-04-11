import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import ClientRepository from "../core/ClientRepository";
import CollectionClient from "../backend/db/CollectionClient";

export default function Home() {

  const [client , setClient] = useState<Client>(Client.void())
  const [clients , setClients] = useState<Client[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const repo: ClientRepository = new CollectionClient()

useEffect(() => {

repo.AllUsers().then(setClients)

} , [])

  function clientSelect(client: Client) {

    setClient(client)
    setVisivel('form')

  }

  function newClient(){

    setClient(Client.void())
    setVisivel('form')

  }
  function saveClient(client: Client) {

    console.log(client)
    setVisivel('tabela')

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



            <Table clients={clients} clientSelect={clientSelect}></Table>
          </>

        ) : (

          <Form client={client} clientChanged={saveClient} cancel={() => setVisivel('tabela')}></Form>

        )}
      </Layout>

    </div>
  )
}
