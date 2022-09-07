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
        "price":  15,
        "stock": 100
    },
    {
        "id": 3,
        "name": "Julius Erving",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-erving.jpg",
        "price":  15,
        "stock": 100
    },
    {
        "id": 4,
        "name": "Lewis Hamilton",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-hamilton.jpg",
        "price":  18,
        "stock": 100
    },
    {
        "id": 5,
        "name": "James Harden",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-harden.jpg",
        "price":  16.5,
        "stock": 100
    },
    {
        "id": 6,
        "name": "David Luis",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-luis.jpg",
        "price":  15.5,
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
    }, [Funkos])

    return (
        <>
        <div className="w-75 d-flex flex-column m-auto">
            <h2 className="funkosTitle my-4 ps-3">Sport Funkos</h2>

            <div className="funkosContainer pb-1 d-flex gap-5">
            {
                Funkos.map(funko => (
                    <Item 
                        key={funko.id}
                        name={funko.name}
                        category={funko.category}
                        imgSrc={funko.imgSrc}
                        price={funko.price}
                        stock={funko.stock}
                    />        
                ))
            }
            </div>
        </div>
        </>
    )
}

export default ItemList;
