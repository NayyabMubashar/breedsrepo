// 
import React, { useContext } from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { FavoritesContext} from '../createcontext/FavoritesContext';

const FavoritesGallery = () => {
  const { state } = useContext(FavoritesContext);
  const { favorites } = state;

  return (
    <div style={{ padding: 24, minHeight: 560 }}>
      <h2>Favorite Dogs Gallery</h2>
      {favorites.length === 0 ? (
        <p>No favorite dogs yet.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {favorites.map((dog) => (
            <Card
              key={dog.id}
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
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesGallery;
