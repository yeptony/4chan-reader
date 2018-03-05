import React from 'react';
import BoardList from './BoardList';

function Dropdown(props) {
  return (
    <div className="yep-dropdown z-depth-3">
      <BoardList
        boards={props.boards}
        icon={false}
        handleClick={props.handleClick}
      />
    </div>
  )
}

export default Dropdown
