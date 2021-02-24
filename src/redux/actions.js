import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER, HIDE_ALERT, SHOW_ALERT } from "./types"

export function createPost (post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function showLoader () {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader () {
  return {
    type: HIDE_LOADER
  }
}

export function fetchPosts () {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      const json = await response.json()
      dispatch({ type: FETCH_POSTS, payload: json })
      dispatch(hideLoader())
    } catch (e) {
      dispatch(showAlert('что то пошло не так'))
      dispatch(hideLoader())
    }
  }
}

export function showAlert (text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 2000)
  }
}

export function hideAlert () {
  return {
    type: HIDE_ALERT
  }
}