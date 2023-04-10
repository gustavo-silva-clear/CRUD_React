import Titulo from "./Titulo";

interface LayoutProps {

    titulo: string
    children: any

}

export default function Layout(props: LayoutProps) {

    return (
        <div className={`
        
        flex flex-col w-2/3
        bg-white 
        text-gray-800
        text-3xl
        rounded-md
        
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="pl-6">

                {props.children}

            </div>

        </div>

    )

}