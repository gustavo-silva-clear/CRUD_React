export default function Titulo(props) {

    return (

        <div className="flex flex-col justify-center">

            <h1 className="p-4 text-2xl">
                {props.chidren}
            </h1>

            <hr className="border-2 border-purple-500" />
        </div>

    )

}