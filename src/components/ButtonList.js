import React from 'react'
import Button from './Button'

const ButtonList = () => {

 const lists = ['All', 'Gaming', 'Music', 'Cricket', 'Food', 'Live', 'Mixes', 'Food', 'Albums', 'Javascript',];

  return (
    <div className='flex sticky top-20'>
        {lists.map((list,index) =>  <Button key={index} name={list}/>)}
    </div>
  )
}

export default ButtonList;
