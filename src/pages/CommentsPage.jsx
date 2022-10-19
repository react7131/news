import { Delete } from '@mui/icons-material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'timeago.js';
import { deleteComment } from '../redux/commentSlice';

const CommentsPage = () => {
  const {comments} = useSelector(state => state.comment);
  const dispatch = useDispatch();

  const deleteCommentHandler = (id) => {
    dispatch(deleteComment(id))
  }

  return (
    <div>
      {comments.lenght === 0 && <div>you have no comment yet</div>}
      <div className='bg-primary p-2 rounded mb-4'>Your Comments on diffrent news</div>
      {comments.map( comment => (
        <div className='d-flex justify-content-between shadow-md border-1 bg-white mb-3 p-3'>
          <p>you left comment <b>{comment.comment}</b> on news with title <b>{comment.title}</b> {format(comment.date)}</p>
          {/* <button className='bg-primary border-0 p-2 rounded'>delete you comment</button> */}
        <Delete className='text-primary' onClick={() => deleteCommentHandler(comment.id)} />
        </div>
      ))}
    </div>
  )
}

export default CommentsPage