import './estilosTitulo.css'

function ItemListContainer(prop) {
    const {greeting} = prop
    return (
        <div className="estilosTitulo">
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer