import React from 'react';

function BoardResume(props) {
  return (
    <li className="collection-item avatar"
      key={props.key}
      onMouseDown={props.handleClick}
      data-index={props.index}
    >
      <i className="material-icons circle" data-index={props.index}>folder</i>
      <span className="title" data-index={props.index}>{props.tag} - {props.title}</span>
      <p data-index={props.index}>{props.meta_description}</p>
      {props.icon && <a href="#!" className="secondary-content" data-index={props.index} onClick={props.handleDelete}><i className="material-icons" data-index={props.index}>delete</i></a>}
    </li>
  )
}

export default BoardResume
