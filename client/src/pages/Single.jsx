import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://images.pexels.com/photos/3010250/pexels-photo-3010250.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='user'>
          <img src="https://images.pexels.com/photos/1564126/pexels-photo-1564126.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className='info'>
            <span>Jhon</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>            
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <br />
        <p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam debitis obcaecati neque repellendus sit nam sint, quaerat placeat distinctio illo blanditiis? Consequuntur vero molestias molestiae earum natus et non consectetur!</p>
        <br />
        <p>Qui sapiente excepturi beatae dolore ut sed recusandae dolorum in ipsum, ipsa officiis? Vero molestias quos dignissimos voluptate distinctio optio ad veniam nobis voluptatum. Possimus amet quibusdam rem obcaecati dolor?</p>
        <br />
        <p>Autem labore laudantium aliquid dignissimos. Sequi cupiditate consectetur ducimus perspiciatis sed veritatis? Esse delectus ex repellat atque ut doloribus impedit voluptas harum fugit voluptate doloremque fuga animi voluptates, repellendus aliquam?</p> </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single