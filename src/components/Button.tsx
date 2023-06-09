interface ButtonProps {

cor?: 'green' | 'blue' | 'gray'
className?: string
children:any
onClick?: () => void

}

export default function Button(props: ButtonProps){

    const cor = props.cor ?? 'gray'

return (
    <button onClick={props.onClick} className={`
    
    bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-700 text-white px-4 p-2 rounded-md
    ${props.className}
    `}>
        {props.children}
    </button>
)

}