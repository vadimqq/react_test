import Post from './Post'
import { connect } from 'react-redux'

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="center">Постов нету</p>
  }
  return syncPosts.map((post, id) => <Post post={ post } key={ id }/>)
}

const mapStateToProps = state => {
  return {
    syncPosts: state.posts.posts
  }
}

export default connect(mapStateToProps, null)(Posts)