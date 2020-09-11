import React from 'react';
import {ReactComponent as BookmarkSVG } from './Bookmark.svg'
import './Bookmark.scss'

function Bookmark() {
  return <div className="Bookmark">

    <div className="Bookmark__container">
      <BookmarkSVG/>
    </div>
  </div>
}

export default Bookmark;
