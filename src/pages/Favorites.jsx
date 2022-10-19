import { Favorite, FavoriteBorderOutlined, ModeCommentOutlined, Save, SaveOutlined } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'timeago.js';

const Favorites = () => {

  const { favorites } = useSelector(state => state.favorite);
  return (
    <div>
      {favorites.lenght === 0 && <div>you have no favorite news</div>}
      <div className='bg-primary p-2 rounded mb-4'>Your favorite News</div>
      {favorites?.map(item => (
        <div key={item.id} className="card mb-3 shadow-lg border-0 position-relative" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.image} className="img-fluid rounded-start" alt={item.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text"><small class="text-muted">{format(item.date_published)}</small></p>
              <p className="card-text" style={{fontSize: '14px'}}>{item.summary}</p>
              <div className='flex align-items-center position-absolute bottom-0 p-3'>
                <FavoriteBorderOutlined className='text-primary me-4'/>
                <SaveOutlined className='text-primary me-4'/> 
                <ModeCommentOutlined className='text-primary'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) )}
    </div>
  )
}

export default Favorites