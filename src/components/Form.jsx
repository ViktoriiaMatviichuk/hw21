import { useDispatch, useSelector } from 'react-redux';
import './Form.css';

export const Form = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const chooseAuthor = () => {
    dispatch({
      type: 'CHOOSEAUTHOR',
      payload: document.getElementById("author-select").value
    });
  };

  const addIcon = (e) => {
    dispatch({
      type: 'ADDPHOTOLINK',
      payload: e.target.value
    });
  };

  const addText = (e) => {
    dispatch({
      type: 'ADDSOMETEXT',
      payload: e.target.value
    });
  };
  const createPost = () => {
    dispatch({
      type: 'CREATEPOST'
     
    });
    
  }
  return <form>
    <h3>Add new post</h3>
    <select id='author-select' onChange={chooseAuthor}>
      {state.authors.map((author)=>(
        <option value={author}>{author}</option>
      ))}
    </select>
    <br></br>
    <input placeholder='Photo Link' onChange={addIcon}></input>
    <br></br>
    <textarea className='text_input' placeholder='Publication Text' onChange={addText}></textarea>
    <br></br>
    <button onClick={createPost} type="button"> Add publication</button>

  </form>;
};
