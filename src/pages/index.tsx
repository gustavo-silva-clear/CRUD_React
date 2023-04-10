import Layout from "../components/Layout";

export default function Home() {
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

        <span>Conteudo</span>
      
      </Layout>
    </div>
  )
}
