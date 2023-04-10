interface inputProps {

    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    valueChanged?: (valor: any) => void
    className?: string

}

export default function Input(props: inputProps) {

    return (

        <div className={`flex flex-col ${props.className}`}>

            <label className="mb-4">
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'}
                   value={props.valor}
                   readOnly={props.somenteLeitura}
                   onChange={e => props.valueChanged?.(e.target.value)}
                   className={`
                   border border-purple-500 rounded-lg
                   focus:outline-none bg-purple-200 px-4 py-2
                   ${props.somenteLeitura ? '' : 'focus:bg-white'}
                   
                   `}
            />

        </div>

    )

}