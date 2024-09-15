import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const posts = [
        {
            id: 1,
            title: "IMAGEN 1 ipsum dolor sit amet consectetur, adipisicing elit. .",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. .",
            img: "https://www.aprean.com/wp-content/uploads/2021/02/cambio-climatico-terrestre.jpeg"
        },
        {
            id: 2,
            title: "imagen 2 ipsum dolor sit amet consectetur, adipisicing elit. .",
            desc:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Re",
            img: "https://www.aprean.com/wp-content/uploads/2020/11/ACS-Agua-Caliente-Sanitaria-1024x384.jpg"
        },
        {
            id: 3,
            title: "IMAGEN 3 ipsum dolor sit amet consectetur, adipisicing elit. Re",
            desc:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Re",
            img: "https://www.aprean.com/wp-content/uploads/2020/11/energia-fotovoltaica-Espana-1536x576.jpg"
        },
        {
            id: 4,
            title: "IMAGEN 4ipsum dolor sit amet consectetur, adipisicing elit. Re",
            desc:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Re",
            img: "https://www.aprean.com/wp-content/uploads/2020/11/evitar-cambio-climatico-1024x384.jpg"
        },
        
    ];

  return (
        <div className='home'>
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>                        
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;