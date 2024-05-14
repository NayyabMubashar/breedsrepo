import React, { useState, useEffect } from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';
import Navbar from './Navbar.js';
import Footer from './Footer.js';



const DogComponent = () => {
    const [breeds, setBreeds] = useState([]);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch list of dog breeds
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data =>
                 setBreeds(Object.keys(data.message)))
            .catch(error => console.error('Error fetching breeds:', error));
        setIsLoading(false)
    }, []);

    // Fetch images for selected breed
    const fetchImages = breed => {
        fetch(`https://dog.ceo/api/breed/${breed}/images`)
            .then(response => response.json())
            .then(data => setImages(data.message))
            .catch(error => console.error('Error fetching images:', error));
            setIsLoading(false);
    };

    return (<>
    <Navbar/>
        <div className="p-0 m-0 container">
            <div className="row  " style={{minHeight:'850px'}}>
                <div className="col-md-3 ">
                    <div className="sidebar sidenav bg-warning">
                    
                        <h2> <span className='text-secondary p-2'><UnorderedListOutlined /></span>Dog Breeds List</h2>
                        {isLoading ? (
                            <div className='d-flex justify-content-center'>
                                <div class="spinner-border text-success " role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div></div>
                        ) : (
                            <ul>
                                {breeds.map(breed => (
                                    <li key={breed} onClick={() => fetchImages(breed)} style={{cursor:'pointer'}}>
                                        {breed}
                                    </li>
                                ))}
                            </ul>
                        )}


                    </div>
                </div>
                <div className="col-md-9">
                    <div className="main-content">
                        <h1 style={{justifyContent:'center',display:'flex'}}>Images</h1>
                        <div className="images">
                            {images.map((image, index) => (
                                <img key={index} src={image} alt={`Dog ${index}`} style={{ width: '190px', margin: '15px',height:'auto' }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    
   </> );
};

export default DogComponent;
