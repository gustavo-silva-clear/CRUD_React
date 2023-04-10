import { useState } from "react";
import Input from "./Input";
import Client from "../core/Client";
import Button from "./Button";

interface formProps {

    client: Client
    cancel?: () => void
    clientChanged?: () => void

}

export default function Form(props) {

    const id = props.client?.id ?? null
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)


    return (

        <div>
            {id ? (

                <Input somenteLeitura texto="Código" valor={id} className="mb-4" />
            ) : false}



            <Input texto="Nome" valor={nome} valueChanged={setNome} className="mb-4" />
            <Input texto="Idade" tipo="number" valor={idade} valueChanged={setIdade} />

            <div className="flex justify-end mt-4">

                <Button cor="blue" className="mr-4" onClick={() => props.clientChanged?.(new Client(nome , idade ,id)) }>
                {id ? 'Alterar' : 'Salvar' }
                </Button >

                <Button onClick={props.cancel}>Cancelar</Button>

            </div>


        </div>

    )

}