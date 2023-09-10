import './Post.css';

export const Post = (props) =>{
const { 
    author, 
    content,
    icon,
    im = "https://w7.pngwing.com/pngs/787/546/png-transparent-planet-earth-world-globe-computer-icons-world-icon-miscellaneous-logo-world-thumbnail.png",   
    date= "23 липня",
    time= "21:10",
    description= "“Exploring Meghan Markle’s first car: A glimpse into Meghan’s early days”",
    source= "THEROYALUK.COM",
    likeButton= "https://image.similarpng.com/very-thumbnail/2020/06/Icon-like-button-transparent-PNG.png",
    heartButton= "https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865_1280.png",
    commentsButton= "https://w7.pngwing.com/pngs/557/856/png-transparent-black-speech-bubble-computer-icons-facebook-like-button-like-share-comment-rectangle-black-silhouette.png",
    shareButton= "https://www.freepnglogos.com/uploads/share-png/arrow-invite-join-share-sharing-icon-15.png"
} = props;
    return(
      
            <div className="wraper" >
                <header className="header">
                    <div>
                        <img className="author-photo" src={"https://images.hellomagazine.com/horizon/original_aspect_ratio/854e51cd7f7e-meghan-markle-smiling.jpg"} alt='avatar'/>
                    </div>
                    <div className="author-inform">
                        <p className="author-name" > {author}</p>
                        <span  className="date"> {date} {time} <img className="icon" src={im} alt='planet'/></span>
                    </div>
                </header>
                <div className="content">
                <div>  {content}</div>
                <img src={icon} alt='car'/>
                </div>
                <footer>
                <div>  {source}</div>
                <p>  {description}</p>
                </footer>
               
                <div className="response"> 
                    <div className="coments">
                        <img src={likeButton} alt='likeButton'  />
                        <img src={heartButton} alt='heartButton'/>
                        <p>41</p>
                    </div>
                    <div className="coments">
                        <p>3</p>
                        <img src={commentsButton} alt='commentsButton'/>
                        <p>7</p>
                        <img src={shareButton}  alt='shareButton' />   
                    </div>
                </div>
            </div>
      
    )
}