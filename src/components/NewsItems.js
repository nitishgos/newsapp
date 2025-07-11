import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description,urlToImage,newsUrl,author,date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card"  style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
    {source}
  
  </span>
  <img src={!urlToImage?"https://image.cnbcfm.com/api/v1/image/106359311-1580227453742rts2zv3k.jpg?v=1715887800&w=1920&h=1080":urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more...</a>
  </div>
</div>
      </div>
    )
  }
}
