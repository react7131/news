import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { addComment } from '../redux/commentSlice';

const CommentModal = ({item}) => {

  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const addCommentHandler = async () => {
    // const res = await axios.post('example.com', {});
    comment && dispatch(addComment({
      newsId: item.id,
      comment,
      title: item.title,
      date: new Date(),
      id: new Date()
    }))
    setComment('');
  }
  
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">New Comment</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">Comment:</label>
              <textarea className="form-control" id="message-text" onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={addCommentHandler}>Send Comment</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CommentModal