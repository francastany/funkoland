function Item({id, name, category, imgSrc, price, stock}) {
    return (
        <div className="card shadow-sm funkoCard border-light" id={`${category}${id}`}>
            <img src={imgSrc} alt="funko" />
            <div className="card-body bg-light mt-1">
                <div className="d-flex flex-column">
                    <h3 className="card-title">{name}</h3>
                    <h5 className="price">$ {price}</h5>
                </div>
            </div>
        </div>
    )
}

export default Item;