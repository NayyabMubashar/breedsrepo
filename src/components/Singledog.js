
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Dogpage() {
    const [dog, setDog] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const fetchDogData = async () => {
            try {
                const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
                const data = await response.json();
                console.log(data);
                setDog(data);
            } catch (error) {
                console.error("Error fetching dog images", error);
            }
        };
        fetchDogData();
    }, [name]);

    return (
        <div className=' dog bg-secondary-subtle'>
            <section>
                
                {dog.map((item, index) => (
                    <><h1 className='font-bold'>{item.name}</h1>
                    <div key={index}
                    className='d-flex justify-content-center'
                    >
                        
                        <article>
                            <img 
                            style={{width:'500px',height:'auto', margin:'50px'}}
                            src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} 
                            alt={item.name} />
                        </article>
                        
        
                        <ul style={{margin:'70px', fontSize:'22px',}}>
                        <li> <span style={{fontWeight:'bold'}}>Bred for:</span> {item.bred_for}</li> 
                            <li><span style={{fontWeight:'bold'}}>Height: </span>{item.height.metric} cm</li>
                            <li><span style={{fontWeight:'bold'}}>Weight: </span>{item.weight.metric} kg</li>
                            <li><span style={{fontWeight:'bold'}}>Breed Group:</span> {item.breed_group}</li>
                            <li><span style={{fontWeight:'bold'}}>Life Span:</span> {item.life_span}</li>
                            <li><span style={{fontWeight:'bold'}}>Temperament:</span> {item.temperament}</li>

                            <Link to='/'   className='inline-block py-2 px-3' >
                 <button className='bg-success'>Back</button>
                        </Link>
                        </ul>
                        
                    </div>
               </> ))}
            </section>

        </div>
    );
}
