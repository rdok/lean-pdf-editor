import React from 'react';
import { ReactComponent as BookmarkSVG } from './Bookmark.svg';
import './Bookmark.scss';

export default () => {
  return <div className="Bookmark">

    <div className="Bookmark__container">
      <BookmarkSVG/>
    </div>
  </div>;
}
