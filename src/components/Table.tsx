import Client from "../core/Client";
import { EditIcon, TrashIcon } from "./Icons";


interface TabelaProps {

    clients: Client[]
    clientSelect?: (client: Client) => void
    clientDelete?: (client: Client) => void


}

export default function Table(props: TabelaProps) {

    const showActions = props.clientDelete || props.clientSelect


    function renderHeader() {

        return (
            <tr>
                <th className="text-left p-4">Id</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">idade</th>
                {showActions ? <th className=" p-4">Ações</th> : false }
            </tr>
        )

    }

    function renderData() {

        return props.clients?.map((client, i) => {

            return (
                <tr key={client.id} className={`${i % 2 === 0 ? 'bg-red-50' : 'bg-purple-200'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.nome}</td>
                    <td className="text-left p-4">{client.idade}</td>
                    {showActions ? actionRender(client) : false}
                </tr>
            )
        })

    }

    function actionRender(client: Client) {

        return (

            <td className="flex justify-center">

                {props.clientSelect ? (

                    <button onClick={() => props.clientSelect?.(client)} className={`
                    flex justify-center items-center
                    text-purple-600 rounded-full 
                    hover:bg-purple-50
                    p-2 m-1`}>{EditIcon}</button>

                ) : false}

                {props.clientDelete ? (

                    <button onClick={() => props.clientDelete?.(client)} className={`
                    flex justify-center items-center
                    text-red-600 rounded-full 
                    hover:bg-purple-50
                    p-2 m-1`}>{TrashIcon}</button>

                ) : false}

            </td>

        )

    }

    return (

        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            bg-gradient-to-r from-purple-500 to-purple-900 
            text-gray-100
            
            
            `}>
                {renderHeader()}
            </thead>

            <tbody>
                {renderData()}
            </tbody>


        </table>

    )

}