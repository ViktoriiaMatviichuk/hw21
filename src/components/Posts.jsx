import { useSelector } from 'react-redux';
import { Post } from './post/Post';

export const Posts = () => {
  const state = useSelector((state) => state);

  return (
  <div className="wrapper">
        <div className="all-content">
            <Post 
                author={"Meghan Markle"}
                icon="https://i0.wp.com/theroyaluk.com/wp-content/uploads/2023/07/Has-Meghan-dropped-biggest-hint-yet-shes-moving-in-with-Harry.jpeg?w=925&ssl=1"   
                content="Meghan fondly remembers her first car 😍"
                > 
            </Post>
            <br></br>
            <Post 
                author={"Meghan Markle"}
                icon="https://i0.wp.com/theroyaluk.com/wp-content/uploads/2023/07/Has-Meghan-dropped-biggest-hint-yet-shes-moving-in-with-Harry.jpeg?w=925&ssl=1"   
                content="Meghan fondly remembers her first car 😍"
                > 
            </Post>

            {state.posts.map((post)=>(
              <Post author={post.author} content= {post.text} icon={post.icon}/> 
            ))}
            </div>
    </div>
)};
