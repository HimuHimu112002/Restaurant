import React from 'react'

const UserComment = (props) => {
  return (
    props.Comment.map((item)=>{
        return(
            <div key={item.id} className="commentSection">
              <h4>Customer Review</h4>
              <h5>Name : {item.author}</h5>
              <p>Review : {item.commment}</p>
              <p>Ratings : {item.date}</p>
              <p>Ratings : {item.rating}</p>
            </div>
        )
    })
  )
}

export default UserComment