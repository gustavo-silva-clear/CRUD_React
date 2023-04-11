import { useState } from "react"

export default function useTableForm() {

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const displayTable = () => setVisivel('tabela')
    const displayForm = () => setVisivel('form')

    return {

        formVisible: visivel === 'form',
        tableVisible: visivel === 'tabela',
        displayForm,
        displayTable
   
    }


}