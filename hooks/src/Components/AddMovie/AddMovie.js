import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Add = (props) => {
	const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")
const [rating, setRating] = useState("")
const [posterUrl, setPosterUrl] = useState("")
const [trailerSrc, setrailerSrc] = useState("")

const handleClick=(e)=>{
    e.preventDefault()
}
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigation=useNavigate()
  const handelClick = () => {
    props.add(title, desc, posterUrl, trailerSrc);
    navigation('/')
  };
  return (
		<>
		<Button className="add-movie" variant="primary" onClick={handleShow}>
		 Add Movie
		</Button>
		<Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add To Movie List</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
        <form className="login-box">
        Title
        <input type="text" placeholder="Add Title" onChange={(e) => setTitle(e.target.value)} />
        Description
        <input type="text" placeholder="Add Description" onChange={(e) => setDesc(e.target.value)} />
        Rating
        <input type="number" placeholder="Add Rating" onChange={(e) => setRating(e.target.value)} />
        PosterURL
        <input type="url"  placeholder="Add PosterUrl" onChange={(e) => setPosterUrl(e.target.value)} />
        <button className='add-btn' onClick={handleClick}>Add</button>
    </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default Add;