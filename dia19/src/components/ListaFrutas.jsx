const ListaFrutas = ({ frutas }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto mt-6">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
                Lista de Frutas
            </h2>

            <p className="text-gray-600 mb-4">
                Total de frutas: <span className="font-semibold">{frutas.length}</span>
            </p>

            <ul className="space-y-2">
                {frutas.map((fruta, index) => (
                    <li
                        key={index}
                        className="bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition"
                    >
                        {fruta}
                    </li>
                ))}
            </ul>

            <div>
            
            </div>
        </div>
    );
};

export default ListaFrutas;
