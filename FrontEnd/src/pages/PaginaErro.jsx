import { Link } from "react-router-dom";

function PaginaErro(){
    return (
        <div className="min-h-screen flex flex-col gap-1 items-center justify-center bg-gradient-to-br from-zinc-900 to-slate-800 text-white">
            <h1 className="text-5xl font-bold">404</h1>
            <p className="text-2xl font-medium">Pagina Não Encontrada.</p>
            <Link to={"/"} className="bg-[#4F46E5] w-40 h-10 flex items-center justify-center text-center rounded-sm mt-5">
                Voltar para Home
            </Link>
        </div>

    )
}

export default PaginaErro