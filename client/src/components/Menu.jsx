import React from 'react'


const Menu = () => {

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
    <div className='menu'>
        <h1>Other psts you make like</h1>
        {posts.map((post) => (
            <div className='post' key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More </button>
            </div>
        ))}
    </div>
  );
};

export default Menu