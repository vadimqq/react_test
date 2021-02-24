import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/actions'
import Alert from './Alert'

class PostForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  SubmitHandler = event => {
    event.preventDefault()
    const { title } = this.state

    if (!title.trim()) {
      return this.props.showAlert('Введите название')
    }

    const newPost = {
      title, id:Date.now().toString()
    }
    this.props.createPost(newPost)
    this.setState({ title: '' })
  }

  changeInputHandler = event => {
    this.setState( prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render() {
    return (
      <form onSubmit={this.SubmitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="form-group mb-3">
          <label htmlFor="title">Заголовок</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={ this.state.title }
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">Создать</button>
      </form>
    )
  }
}

const mapDispathToProps = {
  createPost, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispathToProps)(PostForm)