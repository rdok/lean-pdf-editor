import React, { Component } from 'react';

import './Editor.scss';

export default class Editor extends Component {

  render() {
    return (
      <div className="ActionsForm">
        <div className="ActionsForm__container">
          <form>
            <input type="submit" value="Bookmark"/>
          </form>
        </div>
      </div>
    );
  }
}
