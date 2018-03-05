import React from 'react';
import Dropdown from './Dropdown'

function BoardAdd(props) {
  return (
    <div className="row yep-dropdown-wrapper">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input type="text" className="validate" placeholder="Boards"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </div>
        </div>
      </form>
      {props.show_dropdown && <Dropdown boards={props.boards} handleClick={props.handleClick} />}
    </div>
  )
}

export default BoardAdd
