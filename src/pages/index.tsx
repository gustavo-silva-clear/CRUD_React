import Layout from "../components/Layout";
import Table from "../components/Table";
import Button from "../components/Button";
import Form from "../components/Form";
import useClients from "../hooks/useClients";

export default function Home() {

  const { clientSelect , deleteClient , saveClient , newClient, client , clients , tableVisible , displayTable} = useClients()

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
        {tableVisible ? (

          <>
            <div className="flex justify-end">

              <Button cor="green" className="mb-4" onClick={newClient}>Novo Cliente</Button>

            </div>



            <Table clients={clients} clientSelect={clientSelect}
              clientDelete={deleteClient}
            />
          </>

        ) : (

          <Form client={client} clientChanged={saveClient} cancel={() => displayTable}></Form>

        )}
      </Layout>

    </div>
  )
}
