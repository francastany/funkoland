import '../css/ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";

import customFetch from "../utils/customFetch";
import ItemList from '../conteiners/ItemList';

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
    },
    {
        "id": 7,
        "name": "Hakeem Olajuwon",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-olajuwon.jpg",
        "price":  14.5,
        "stock": 100
    },
    {
        "id": 8,
        "name": "Randy Orton",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-orton.jpg",
        "price":  12.5,
        "stock": 100
    },
    {
        "id": 9,
        "name": "Isiah Thomas",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-thomas.jpg",
        "price":  12.5,
        "stock": 100
    },
    {
        "id": 10,
        "name": "Dominick Wilkins",
        "category": "sports",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/sport-wilkins.jpg",
        "price":  15.5,
        "stock": 100
    },
    {
        "id": 11,
        "name": "Lord Voldemort",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-voldemort.jpg",
        "price":  18,
        "stock": 45
    },
    {
        "id": 12,
        "name": "Dominic Toretto",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-toretto.jpg",
        "price":  16,
        "stock": 48
    },
    {
        "id": 13,
        "name": "Rachel Green",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-rachel.jpg",
        "price":  20,
        "stock": 25
    },
    {
        "id": 14,
        "name": "Monica Geller",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-monica.jpg",
        "price":  18,
        "stock": 25
    },
    {
        "id": 15,
        "name": "Matrix Trinity",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-matrixTrinity.jpg",
        "price":  10,
        "stock": 45
    },
    {
        "id": 16,
        "name": "Majin Boo",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-majinboo.jpg",
        "price":  15.5,
        "stock": 45
    },
    {
        "id": 17,
        "name": "IT PennyWise",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-it.jpg",
        "price":  14,
        "stock": 60
    },
    {
        "id": 18,
        "name": "Harry Potter",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-harryPotter.jpg",
        "price":  18,
        "stock": 45
    },
    {
        "id": 19,
        "name": "Han Solo",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-hansolo.jpg",
        "price":  18,
        "stock": 45
    },
    {
        "id": 20,
        "name": "Gollum",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-gollum.jpg",
        "price":  16,
        "stock": 28
    },
    {
        "id": 21,
        "name": "Donatello",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-donatello.jpg",
        "price":  14.5,
        "stock": 60
    },
    {
        "id": 22,
        "name": "Vito Corleone",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-corleone.jpg",
        "price":  15,
        "stock": 60
    },
    {
        "id": 23,
        "name": "Chucky",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-chucky.jpg",
        "price":  13,
        "stock": 60
    },
    {
        "id": 24,
        "name": "Ashoka",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-ashoka.jpg",
        "price":  13,
        "stock": 35
    },
    {
        "id": 25,
        "name": "Whitney Houston",
        "category": "icons",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/icons-whitney.jpg",
        "price":  16,
        "stock": 34
    },
    {
        "id": 26,
        "name": "George Washington",
        "category": "icons",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/icons-washington.jpg",
        "price":  18,
        "stock": 30
    },
    {
        "id": 27,
        "name": "Rocky Balboa",
        "category": "icons",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/icons-rockyBalboa.jpg",
        "price":  18,
        "stock": 40
    },
    {
        "id": 28,
        "name": "Marilyn Monroe",
        "category": "icons",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/icons-monroe.jpg",
        "price":  16,
        "stock": 53
    },
    {
        "id": 29,
        "name": "Freddy Mercury",
        "category": "icons",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/icons-mercury.jpg",
        "price":  22,
        "stock": 30
    },
    {
        "id": 30,
        "name": "Abraham Lincoln",
        "category": "icons",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/icons-lincoln.jpg",
        "price":  18,
        "stock": 36
    },
    {
        "id": 31,
        "name": "AXL Rose",
        "category": "icons",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/icons-axlRose.jpg",
        "price":  18,
        "stock": 36
    },
    {
        "id": 32,
        "name": "WonderWoman",
        "category": "heroes",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/heroes-wonderwoman.jpg",
        "price":  14,
        "stock": 65
    },
    {
        "id": 33,
        "name": "Venom",
        "category": "heroes",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/heroes-venom.jpg",
        "price":  16,
        "stock": 41
    },
    {
        "id": 34,
        "name": "SpiderMan",
        "category": "heroes",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/heroes-spiderman.jpg",
        "price":  18,
        "stock": 36
    },
    {
        "id": 35,
        "name": "Ned Spiderman",
        "category": "movies",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/movies-nedSpiderman.jpg",
        "price":  14,
        "stock": 36
    },
    {
        "id": 36,
        "name": "The Joker",
        "category": "heroes",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/heroes-joker.jpg",
        "price":  18,
        "stock": 36
    },
    {
        "id": 37,
        "name": "Harley Quinn",
        "category": "heroes",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/heroes-harleyquinn.jpg",
        "price":  16.5,
        "stock": 36
    },
    {
        "id": 38,
        "name": "Flash",
        "category": "heroes",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/heroes-flash.jpg",
        "price":  16,
        "stock": 36
    },
    {
        "id": 39,
        "name": "Doctor Strange",
        "category": "heroes",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/heroes-docstrange.jpg",
        "price":  16,
        "stock": 36
    },
    {
        "id": 40,
        "name": "Captain America",
        "category": "heroes",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/heroes-captainamerica.jpg",
        "price":  18,
        "stock": 36
    },
    {
        "id": 41,
        "name": "Batman",
        "category": "heroes",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/heroes-batman.jpg",
        "price":  18,
        "stock": 36
    },
    {
        "id": 42,
        "name": "Woody",
        "category": "disney",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/disney-woody.jpg",
        "price":  20,
        "stock": 36
    },
    {
        "id": 43,
        "name": "Lady Tremaine",
        "category": "disney",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/disney-tremaine.jpg",
        "price":  16,
        "stock": 49
    },
    {
        "id": 44,
        "name": "UP! Russel",
        "category": "disney",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/disney-russel.jpg",
        "price":  16.5,
        "stock": 36
    },
    {
        "id": 45,
        "name": "Buzz LightYear",
        "category": "disney",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/disney-lightyear.jpg",
        "price":  22,
        "stock": 31
    },
    {
        "id": 46,
        "name": "Captain Garfio",
        "category": "disney",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/disney-garfio.jpg",
        "price":  18,
        "stock": 36
    },
    {
        "id": 47,
        "name": "Doctor Facilier",
        "category": "disney",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/disney-facilier.jpg",
        "price":  16.5,
        "stock": 47
    },
    {
        "id": 48,
        "name": "Cruela De Vil",
        "category": "disney",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/disney-cruela.jpg",
        "price":  18,
        "stock": 52
    },
    {
        "id": 49,
        "name": "Cindirella",
        "category": "disney",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/disney-cenicienta.jpg",
        "price":  18,
        "stock": 39
    },
    {
        "id": 50,
        "name": "UP! Carl",
        "category": "disney",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/disney-carl.jpg",
        "price":  16,
        "stock": 46
    },
    {
        "id": 51,
        "name": "Snow White",
        "category": "disney",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut, omnis eligendi corrupti delectus et quod! Debitis magni, perferendis magnam molestiae natus ipsa nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ut.",
        "imgSrc": "./img/disney-blancanieves.jpg",
        "price":  16,
        "stock": 54
    },

];

function ItemListContainer(){

    const [FunkosList, setFunkos] = useState([])

    useEffect(() => {
        customFetch(1500, funkosExtern)
        .then(data => setFunkos(funkosExtern))
        .then(console.log(FunkosList))
        .catch(error => console.log(error))
    }, [FunkosList])

    return (
        <>
            <ItemList FunkosList={ FunkosList } />
        </>
    );
}

export default ItemListContainer;