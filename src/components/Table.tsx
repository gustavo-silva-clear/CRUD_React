import Client from "../core/Client";


interface TabelaProps {

    clients: Client[]

}

export default function Table(props: TabelaProps) {


    function renderHeader() {

        return (
            <tr>
                <th className="text-left p-4">Id</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">idade</th>
            </tr>
        )

    }

    function renderData() {

        return props.clients?.map((client, i) => {

            return (
                <tr key={client.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.nome}</td>
                    <td className="text-left p-4">{client.idade}</td>
                </tr>
            )
        })

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