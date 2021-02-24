import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import Post from './Post'
import Loader from './Loader'

const FetchedPosts = () => {

  const dispacth = useDispatch()
  const posts = useSelector(state => state.posts.fetchedPosts)
  const loading = useSelector(state => state.app.loading)
  
  if (loading) {
    return <Loader />
  }

  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={ () => {
          dispacth(fetchPosts())
        }}
      >
        Загрузить
      </button>
    )
  }

  return posts.map((post, id) => <Post post={ post } key={ id }/>)
}

export default FetchedPosts