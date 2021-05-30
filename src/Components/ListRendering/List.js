import React from 'react'
//import Person from './Person'
function List() {
   const names=['stark','steve','natasa','thor','thor']
    // const persons=[
    //     {
    //         id:1,
    //         name:'Tony stark',
    //         age:55,
    //         skill:'React'
    //     },
    //     {
    //         id:2,
    //         name:'steve',
    //         age:45,
    //         skill:'java'
    //     },
    //     {
    //         id:3,
    //         name:'natasa',
    //         age:30,
    //         skill:'php'
    //     }
    // ]
     const nameList= names.map((name,index)=>
        <h2 key={index}>{index}{name}</h2>)//keys are acceptable in parent component only
    return (
        <div>
           {nameList}
        </div>
    )
}

export default List
//index as a key
//when to use index as a key ?
//1.The items in your list do not have a unique id.
//2.the list is a static and will not change.
//3.The list will never be reordered or filtered