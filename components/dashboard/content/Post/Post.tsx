import React from 'react';
import './Post.css';

interface PostData {
  img: string;
  name: string;
  desc: string;
  likes: number;
  liked: boolean;
}

interface PostProps {
  data: PostData;
}

const Post: React.FC<PostProps> = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />
      <span style={{ color: 'white', fontSize: '1rem' }}>
        {data.likes} likes
      </span>
      <div className="postReact">
        <img
          src={data.liked ? '/herz.png' : '/traurig.png'}
          alt=""
          width={30}
          height={30}
          className='reactIcon'
        />
        <img src="/kommentar.png" alt="" width={30} height={30} className='reactIcon' />
        <img src="teilen.png" alt="" width={30} height={30} className='reactIcon' />
      </div>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;

