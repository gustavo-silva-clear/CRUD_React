import Client from "../core/Client";
import { useEffect, useState } from "react";
import ClientRepository from "../core/ClientRepository";
import CollectionClient from "../backend/db/CollectionClient";
import useTableForm from "./useTableForm";


export default function  useClients() {

    const [client, setClient] = useState<Client>(Client.void())
    const [clients, setClients] = useState<Client[]>([])
    
  const {displayForm, displayTable , tableVisible, formVisible} =useTableForm()

    const repo: ClientRepository = new CollectionClient()
  
    useEffect(obterTodos, [])
  
    function obterTodos() {
  
      repo.AllUsers().then(clients => {
  
        setClients(clients)
        displayTable()
  
      })
    }
  
    function clientSelect(client: Client) {
  
      setClient(client)
      displayForm()
  
    }
  
    async function deleteClient(client: Client) {
  
      await repo.delete(client)
      obterTodos()
    }
  
  
  
    function newClient() {
  
      setClient(Client.void())
      displayForm()
      
  
    }
    async function saveClient(client: Client) {
  
      await repo.save(client)
      obterTodos()
    }

    return {

        displayTable,
        tableVisible,
        client,
        clients,
        saveClient,
        newClient,
        deleteClient,
        clientSelect,
        obterTodos

    }

}