
import React, { useState, useEffect, useContext } from 'react';
import { Card, Input, Layout, theme } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faHeart } from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';
import { FavoritesContext } from '../createcontext/FavoritesContext';
const { Header, Content } = Layout;
const { Search } = Input;

const Home = () => {
  const { state, dispatch } = useContext(FavoritesContext);

  const [dogImages, setDogImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchDogImages();
  }, []);

  const fetchDogImages = async () => {
    try {
      const response = await fetch('https://api.thedogapi.com/v1/breeds');
      const data = await response.json();
      setDogImages(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching dog images", error);
      setIsLoading(false);
    }
  };

  const filteredDogs = dogImages.filter(dog =>
    dog.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const handleAddFavorite = (dog) => {
    dispatch({ type: 'ADD_FAVORITE', payload: dog });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Layout>
        <Header style={{ padding: 0,  background: 'blue', height: '70px' }}>


          <Link to='/card'
          ><FontAwesomeIcon icon={faFloppyDisk} style={{ color: 'black', fontSize: '44px', margin:'9px' }} />
            <span style={{ position: 'absolute', top: '3px', color: 'black', borderRadius: '50%', padding: '10px 1px', fontSize: '24px' }}>
              {state.favorites.length}</span></Link>
        </Header>

        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 560, borderRadius: borderRadiusLG }}>
            <div className='text-center'>
              <h1>The Dog App</h1>
              <p>This application is powered by <a href='https://thedogapi.com'>The Dog App</a></p>
            </div>
            <Search
              placeholder="Search for a dog breed"
              onChange={(e) => setSearchText(e.target.value)}
              style={{ marginBottom: 30, width: 500, padding: '30px', marginLeft: '540px' }}
            />
            {isLoading ? (
              <div className='d-flex justify-content-center'>
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {filteredDogs.map((dog, index) => (
                  <Link to={`/${dog.name}`} key={dog.id}>
                    <Card
                      hoverable
                      style={{ width: 290, margin: '20px' }}
                      cover={
                        <img
                          style={{ width: '100%', height: '190px' }}
                          alt={dog.name}
                          src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                        />
                      }
                    >
                      <Meta style={{ fontWeight: 'bold' }} title={dog.name} />
                      <button
                        className='btn btn-outline-warning sm m-2'
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddFavorite(dog);
                        }}
                      >
                        Fav Dog
                      </button>

                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Content>

      </Layout>
    </Layout>
  );
};

export default Home;


