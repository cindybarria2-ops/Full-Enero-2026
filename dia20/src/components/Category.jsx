const Category = ({ category, filterProduct }) => {
    
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Nombre</th>
                        <th className="py-2 px-4 border-b">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {filterProduct.map((product) => (
                        <tr key={product.id}>
                            <td className="py-2 px-4 border-b">{product.id}</td>
                            <td className="py-2 px-4 border-b">{product.nombre}</td>
                            <td className="py-2 px-4 border-b">${product.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Category;