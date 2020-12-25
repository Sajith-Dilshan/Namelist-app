import React from 'react'
import NameListItem from './NameListItem'

function NameList() {

 const listname = [
     {
    id : 1,     
    name: {
    title: "mr",
    first: "brad",
    last: "gibson"
    },
    location: {
        city: "kilcoole",
        },
    email: "brad.gibson@example.com",
    dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26
      },
      picture: {       
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",       
      },
        
},


{
    id : 2,
    name: {
    title: "Ms",
    first: "Alicja",
    last: "Welsch"
    },
    location: {
        city: "Donauwörth",
        },
    email: "alicja.welsch@example.com",
    dob: {
        date: "1951-01-16T22:13:34.494Z",
        age: 69
      },
      picture: {       
        medium: "https://randomuser.me/api/portraits/med/women/61.jpg"       
      },
        
},

{
    id : 3,
    name: {
    title: "Miss",
    first: "Valentina",
    last: "Robert"
    },
    location: {
        city: "Metz",
        },
    email: "valentina.robert@example.com",
    dob: {
        date: "2006-08-22T18:33:07.360Z",
        age: 14
      },
      picture: {       
        medium: "https://randomuser.me/api/portraits/med/women/0.jpg"       
      },
        
},


];

const NameListcomponent = () =>{
    return(
    listname.map(aName => {
        return(<NameListItem
            key={aName.id} 
            name= {`${aName.name.first} ${aName.name.last}`}
            city={aName.location.city}
            email={aName.email}
            birthday={aName.dob.date}
            pic={aName.picture.medium}
            />)
    })
    )

};


    return ( 
        <div>
            
      <h1>Name list</h1>
      <hr />
      <ul>
        
    {NameListcomponent()}

    
        
      </ul>
    
        </div>
    )
}

export default NameList;
