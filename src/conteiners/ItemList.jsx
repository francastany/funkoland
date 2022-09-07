import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import Item from "../components/Item";

const funkosExtern = [
    {
        "id": 1,
        "name": "Anthony Davis",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-davis.jpg",
        "price":  14.5,
        "stock": 100
    },
    {
        "id": 2,
        "name": "Kevin Durant",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-durant.jpg",
        "price":  14.5,
        "stock": 100
    },
    {
        "id": 3,
        "name": "Julius Erving",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-erving.jpg",
        "price":  14.5,
        "stock": 100
    },
    {
        "id": 4,
        "name": "Lewis Hamilton",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-hamilton.jpg",
        "price":  14.5,
        "stock": 100
    },
    {
        "id": 5,
        "name": "James Harden",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-harden.jpg",
        "price":  14.5,
        "stock": 100
    },
    {
        "id": 6,
        "name": "David Luis",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-luis.jpg",
        "price":  14.5,
        "stock": 100
    }
]

function ItemList() {
    const [Funkos, setFunkos] = useState([])

    useEffect(() => {
        customFetch(2000, funkosExtern)
        .then(data => setFunkos(funkosExtern))
        .then(console.log(Funkos))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
        <div className="container-fluid d-flex flex-wrap">

        {
            Funkos.map(funko => (
                <Item 
                    id={funko.id}
                    name={funko.name}
                    category={funko.category}
                    imgSrc={funko.imgSrc}
                    price={funko.price}
                    stock={funko.stock}
                />        
            ))
        }
        </div>
        </>
    )
}

export default ItemList;
