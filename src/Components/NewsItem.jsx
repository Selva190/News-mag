import image from '../assets/News.jpg';
import React from 'react';


const NewsItem = ({title, description, src, url}) => {
  // Ensure title and description are strings before slicing
  const displayTitle = title ? title.slice(0,50) : "No Title Available";
  const displayDescription = description ? description.slice(0,90) : "News is a current event. It is information about something that has just happened.";

  return (
   <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "340px"}}>
  <img src={src?src:image} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{displayTitle}</h5>
    <p className="card-text">{displayDescription}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default NewsItem
