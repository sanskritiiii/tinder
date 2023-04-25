import React, { useState, useEffect } from 'react'
import './Cards.css'
import TinderCard from 'react-tinder-card'

const TinderCards = () => {
    const [people, setPeople] = useState([
        
        {
            name: 'Tom Holland',
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Holland_by_Gage_Skidmore.jpg',
        },
       
        {
            name: 'Amber Heard',
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg',
        },

        {
            name: 'Jeff Bezos',
            url: ' https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg',
        },
       
        {
            name: 'Mark Zuckerberg',
            url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
        },

        {
            name: 'Zendaya',
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg',
        },

        {
            name: 'Johnny Depp',
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg',
        },

        {
            name: 'Kendall Jenner',
            url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Kendall_Jenner_at_Met_Gala_2021_5.jpg',
        },

        {
            name: 'Andrew Garfield',
            url: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Andrew_Garfield_by_Gage_Skidmore_%28cropped%29.jpg',
        }, 
        
        {
            name: 'Gigi Hadid',
            url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Gigi_Hadid_Maybelline_Director_Cut_2_%28cropped%29.png',
        },

        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg'
        }
    ])

    useEffect(() => {
         async function fetchData() {
        //     const req = await axios.get("/tinder/cards")
       // setPeople(req.data)
        }
        fetchData()
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('receiving' + nameToDelete)
    }

    const outOfFrame = name => {
        console.log(name + ' left the screen')
    }
    
    return (
        <div className="tinderCards">
            <div className="tinderCards__container">
                {people.map(person => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards