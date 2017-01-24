import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import ReadNext from '../ReadNext'
//import ReactDisqusThread from 'react-disqus-thread'
import './style.scss'
import '../../static/scss/highlight.scss'

class SitePost extends React.Component {
    render() {
        const {route} = this.props
        const url = `http://hatsec.io/${route.path}`
        const post = route.page.data
        const home = (
          <div>
            <Link className='gohome' to={ prefixLink('/') }> All Blog Posts
            </Link>
          </div>
        )
        console.log('test', route)

        return (
            <div>
              { home }
              <div className='blog-single'>
                <div className='text'>
                  <h1>{ post.title }</h1>
                  <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                  <div className='date-published'>
                    <em>Published { moment(post.date).format('D MMM YYYY') }</em>
                  </div>
                </div>
                <div className='footer'>
                  <ReadNext post={ post } {...this.props}/>
                  <hr></hr>
                  <p>
                    { config.siteDescr }
                    <a href={ config.siteTwitterUrl }>
                      <br></br> <strong>{ config.siteAuthor }</strong> on Twitter</a>
                  </p>
                </div>
              </div>
            </div>
            );
    }
    handleNewComment(comment) {
        console.log(comment.text);
    }
                  // <ReactDisqusThread
                  //   shortname="example" //hatsec-io"
                  //   identifier="something-unique-12345"
                  //   title={post.title}
                  //   url={url}
                  //   category_id="123456"
                  //   onNewComment={this.handleNewComment}/>
}


SitePost.propTypes = {
    route: React.PropTypes.object.isRequired,
}

export default SitePost
