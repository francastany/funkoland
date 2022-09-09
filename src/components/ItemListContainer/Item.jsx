function Item({id, name, category, imgSrc, price, stock}) {
    return (
        <div className="card shadow-sm funkoCard border-light" id={`${category}${id}`}>
            <img src={imgSrc} alt="funko" />
            <div className="card-body bg-light mt-1">
                <div className="d-flex flex-column">
                    <h3 className="card-title">{name}</h3>
                    <h5 className="price">$ {price}</h5>
                    <a href="./index.html" className="text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        <span>View detail</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Item;