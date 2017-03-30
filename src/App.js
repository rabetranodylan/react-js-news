/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import defaultPicture from './components/img/default.jpg'

const Materialize = window.Materialize

const APP_TITLE = 'Latest news'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS, NEWS_API_KEY } from './utils/api'

//components
import NewsCard from './components/NewsCard'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            news: undefined,
        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-header blue-grey darken-3">
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />

                </div>

                <div className="App-content">
                    <div className="center-align">

                        <div className="App-Input-content">
                            <label style={ { fontSize: 22 } }>
                                Enter your favorite source:
                            </label>
                            <p><a href="https://newsapi.org/sources" target="_blank">List of available sources</a><i className="material-icons prefix">live_help</i></p>
                        </div>

                        <div className="input-field col s12" >
                            <i className="material-icons prefix">stars</i>
                            <input id="recherche" type="text" class="validate" value={ this.state.value } onChange={ this.handleChange } />
                            <label for="recherche"> ex: bloomberg, bbc-news, buzzfeed, ign  </label>
                        </div>
                        <div className="input-field col s12" >
                            <i className="material-icons prefix">search</i>
                            <input id="recherche" type="text" class="validate" value={ this.state.filtre } onChange={ this.handleChange2 } />
                            <label for="recherche"> News filter (ie:type at least 1 character at first search)  </label>
                        </div>

                        <form onSubmit={ this.fetchNews }>
                            <button type="submit" className="waves-effect waves-light btn">
                                Stay updated!
                                <i className="material-icons right">send</i>
                            </button>
                        </form>

                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m12">
                            { this.displayNews() }
                        </div>
                    </div>
                </div>
                <footer className="page-footer grey lighten-4">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <a className="grey-text text-lighten-4 right" href="http://www.esilv.fr/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/60/Logo_ESILV.svg/1280px-Logo_ESILV.svg.png" height="80%" width="80%" /></a>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }


    handleChange = ( event ) => {
        this.setState( { value: event.target.value });
    }
    handleChange2 = ( event ) => {
        this.setState( { filtre: event.target.value });
    }

    //method triggered by onSubmit event of the form or by onClick event of the "Get some news!" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchNews = async ( event ) => {

        event.preventDefault()

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            let _news = await get( ENDPOINTS.NEWS_API_URL, {
                //YOU NEED TO PROVIDE YOUR "APIXU" API KEY HERE, see /utils/api.js file to grab the DOCUMENTATION file
                apiKey: NEWS_API_KEY,
                source: this.state.value,

            })

            this.setState( {
                news: _news
            })

        }
        catch ( error ) {
            Materialize.toast( error, 8000, 'error-toast' )
            console.log( 'Failed fetching data: ', error )
        }

    }


    //handle display of the received news object
    displayNews = () => {
        const news = this.state.news

        if ( news ) {

            console.log( news )

            return news.articles.filter( article => {
                return article.title.indexOf( this.state.filtre ) != -1
            }).map(
                article => {
                    return (
                        <NewsCard picture={ article.urlToImage }
                            text={ article.description }
                            title={ article.title }
                            url={ article.url }
                            date={ article.publishedAt }
                            author={ article.author } />
                    )
                }
                )
        }

        return null
    }

}

export default App
