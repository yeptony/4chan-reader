import React from 'react';
import axios from 'axios';
import BoardList from './BoardList';
import BoardAdd from './BoardAdd';

class StartUp extends React.Component {
  constructor() {
    super()
    this.state = {
      boards: [],
      filtered_boards: [],
      added_boards: [],
      show_dropdown: false,
      error: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const config = {
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/http://a.4cdn.org/boards.json',
    }

    axios.request(config)
      .then(res => {
        let boards = res.data.boards.reduce((boards, board) => {
          boards.push({
            'tag': '/' + board.board + '/',
            'title': board.title,
            'meta_description': board.meta_description
          })
          return boards
        }, [])
        this.setState({ boards })
      })
      .catch(err => {
        this.setState({ "error": err })
      })
  }

  handleChange(e) {
    let value = e.target.value
    let regex = new RegExp(value, 'g')
    let filtered_boards = this.state.boards.filter(board => {
      if((regex.test(board.tag) || regex.test(board.title)) && this.state.added_boards.indexOf(board) == -1) {
        return board
      }
    })
    if(filtered_boards.length === 0) {
      filtered_boards.push({
        'tag': '/404/',
        'title': 'Not found',
        'meta_description': 'No board matches this search'
      })
    }
    this.setState({
      filtered_boards,
      show_dropdown: value == "" ? false : true
    })
  }

  handleBlur(e) {
    this.setState({ show_dropdown: false })
    e.target.value = ''
  }

  handleClick(e) {
    const index = e.target.dataset.index
    if(this.state.filtered_boards[index].tag !== '/404/') {
      this.setState({
        added_boards: [...this.state.added_boards, this.state.filtered_boards[index]],
        show_dropdown: false
      })
    }
  }

  handleDelete(e) {
    const index = parseInt(e.target.dataset.index)
    this.setState((prevState) => ({
      added_boards: [...prevState.added_boards.slice(0,index),...prevState.added_boards.slice(index + 1)]
    }))
  }

  render() {
    return (
      <div className="row">
        <h2 className="center">Welcome!</h2>
        <h5 className="center">Start with adding some boards you'd like to see</h5>
        <BoardAdd
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleBlur={this.handleBlur}
          show_dropdown={this.state.show_dropdown}
          boards={this.state.filtered_boards}
        />
      <BoardList
        boards={this.state.added_boards}
        icon={true}
        handleDelete={this.handleDelete}
      />
      </div>
    )
  }
}

export default StartUp
