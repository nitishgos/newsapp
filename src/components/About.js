import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="Container">
            <h1>About us</h1>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Welcome to NewsHunt!...
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Welcome to Newhunt, your daily companion for staying informed about the world around you. We are dedicated to delivering fresh, accurate, and engaging news that matters, straight to your fingertips.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How it Works!...
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      At Newhunt, we believe that staying updated shouldn’t feel overwhelming. That’s why our team works tirelessly to curate stories that are relevant, insightful, and easy to digest. From breaking news and in-depth analysis to trending topics and human interest stories, we cover a wide range of categories to ensure there’s something for everyone.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        NewsHunt's Mission ..
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Our mission is simple: to empower you with knowledge, spark conversations, and keep you ahead in an ever-changing world. Whether it’s global headlines or local updates, Newhunt ensures you never miss a beat.

Join us on this journey to explore the stories shaping our times. Stay curious. Stay informed. Stay ahead with Newhunt.
      </div>
    </div>
  </div>
</div>
        </div>
    )
  }
}
