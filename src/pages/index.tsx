import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";

export default function Home() {

  const clients = [

    new Client('Gustavo', 20, '1'),
    new Client('Ana', 18, '2'),
    new Client('Ester', 21, '3'),
    new Client('Julio', 27, '4'),
    new Client('Eduardo', 17, '5'),
    new Client('Isa', 17, '6')


  ]

  function clientSelect(client: Client) {

    console.log(client.nome)

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


        <div className="flex justify-end">

          <Button cor="green" className="mb-4">Novo Cliente</Button>
        
         </div>



       {/*<Table clients={clients} clientSelect={clientSelect}></Table>*/} 

       <Form client = {clients[4]}></Form>

      </Layout>
    </div>
  )
}
