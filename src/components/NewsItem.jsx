import React, { useState } from 'react'
import { format } from 'timeago.js';
import { Favorite, FavoriteBorderOutlined, ModeCommentOutlined, Save, SaveOutlined } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux'
import { addToFavorites } from '../redux/favoriteSlice';
import CommentModal from './CommentModal';

const Card = ({item}) => {

  const [liked, setLiked] = useState(false);

  const {favorites} = useSelector(state => state.favorite);

  const dispatch = useDispatch();

  const likeHandler = () => {
    setLiked(!liked);
  }

  const favoriteHandler = () => {
    dispatch(addToFavorites(item))
  }

  const index = favorites?.findIndex(i => i.id === item.id)

  return (
    <div className='col-12 col-md-6 col-lg-4 g-3'>
      <div className="card p-relative" style={{height: '400px'}} >
        <img src={item.image} className="card-img-top" style={{height: '40%'}} alt={item.title} />
        <div className="card-body">
          <h5 className="card-title fs-6">{item.title}</h5>
          <p style={{fontSize: '12px'}} className='text-muted'>by <span className='text-black'>{item.author.name }</span> at {format(item.date_published)} </p>
          <p className="card-text text-truncate" style={{fontSize: "14px" }}>{item.summary}</p>
          <div className='d-flex flex-wrap mb-2'>
            {
              item.tags?.slice(0,4).map( tag => (
                <a style={{fontSize: '12px', textDecoration: 'none'}} className='me-2' key={tag}>#{tag}</a>)
              )
            }
          </div>
          <div className='position-absolute start-0 bottom-0 w-100 d-flex justify-content-between align-items-center p-2'>
            <a href="#" className="btn btn-primary" >see more...</a>
            <div className='flex align-items-center'>
              <span onClick={likeHandler}>
                {liked ? <Favorite className='text-primary'/> : <FavoriteBorderOutlined className='text-primary'/>}
              </span>
              <span onClick={favoriteHandler}>
                {index !== -1 ? <Save className='text-primary'/>: <SaveOutlined className='text-primary'/> } 
              </span>
              <span>
                <button type="button" className="border-0 bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <ModeCommentOutlined className='text-primary' />
                </button>
                <CommentModal item={item} />
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card