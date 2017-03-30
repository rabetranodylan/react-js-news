import React, { Component } from 'react'

import './NewsCard.css'

class NewsCard extends Component {

    render() {

        const { title, text, picture, url, date, author } = this.props

        return (
            <div className="card col s10 m3 medium blue-grey lighten-5 z-depth-5">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={ picture } />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{ title }<i className="material-icons right">zoom_in</i></span>

                </div>
                <div className="card-reveal blue-grey lighten-2">
                    <span className="card-title grey-text text-darken-4">{ title }<i className="material-icons right">close</i></span>
                    <p>
                        <span>{ text } </span>
                        <a href={ url } target="_blank" className="btn-floating halfway-fab waves-effect waves-light #222 "><i className="material-icons right">launch</i></a>
                    </p>
                    <p>
                        <span>{ author }</span>
                    </p>
                    <p>
                        <span>{ date }</span>
                    </p>
                </div>
            </div>
            /*<div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image news-img-container">
                    <img alt="" className="news-img" src={ picture } />
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="news-title">
                            <a href={ url } target="_blank"> <span className="card-title">
                                { title }
                            </span></a>
                        </div>

                        <div className="news-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ text }</span>
                            </p>
                            <p>
                                <span>{ author }</span>
                            </p>
                            <p>
                                <span>{ date }</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>*/
            /*<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={ picture }/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>
       <span>{ text }</span>
       </p>
    </div>
  </div>*/
        )
    }

}

export default NewsCard