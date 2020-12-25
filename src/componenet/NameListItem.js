import React from 'react'


function NameListItem(props) {
    return (
        <div>
        <p><img src={props.pic} />{props.name}</p>
        <p>City :{props.city}</p>
        <p>Email :{props.email}</p>
        <p>Birthday :{' '}
            {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))
        }</p>
      
        </div>
    )
}

export default NameListItem
