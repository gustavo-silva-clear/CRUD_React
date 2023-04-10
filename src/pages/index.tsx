import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";
import { useState } from "react";

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [client , setClient] = useState<Client>(Client.void())

  const clients = [

    new Client('Gustavo', 20, '1'),
    new Client('Ana', 18, '2'),
    new Client('Ester', 21, '3'),
    new Client('Julio', 27, '4'),
    new Client('Eduardo', 17, '5'),
    new Client('Isa', 17, '6')


  ]

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
