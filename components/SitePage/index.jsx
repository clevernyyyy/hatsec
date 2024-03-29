import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SiteSidebar from '../SiteSidebar'
import './style.scss';


class SitePage extends React.Component {
  render() {
    const {route} = this.props
    const post = route.page.data

    return (
      <div>
        <SiteSidebar {...this.props}/>
        <div className='content'>
          <div className='main'>
            <div className='main-inner'>
              <div className='blog-page'>
                <div className='text'>
                  <h1>{ post.title }</h1>
                  <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleNewComment(comment) {
      console.log(comment.text);
  }
}

SitePage.propTypes = {
    route: React.PropTypes.object.isRequired,
}

export default SitePage
