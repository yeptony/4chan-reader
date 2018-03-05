import React from 'react';
import BoardResume from './BoardResume';

function BoardList(props) {
  const boards = props.boards
  const listBoard = boards.map((board) =>
    <BoardResume
      key={boards.indexOf(board)}
      tag={board.tag}
      title={board.title}
      meta_description={board.meta_description}
      icon={props.icon}
      handleClick={props.handleClick}
      index={boards.indexOf(board)}
      handleDelete={props.handleDelete}
    />
  )
  return (
    <ul className="collection">
      {listBoard}
    </ul>
  )
}

export default BoardList
