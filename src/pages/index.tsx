import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [

    new Client('Gustavo', 20, '1'),
    new Client('Ana', 18, '2'),
    new Client('Ester', 21, '3'),
    new Client('Julio', 27, '4'),
    new Client('Eduardo', 17, '5'),
    new Client('Isa', 17, '6')


  ]

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

        <Table clients={clients}></Table>

      </Layout>
    </div>
  )
}
