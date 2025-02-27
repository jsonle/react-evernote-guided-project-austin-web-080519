import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map((note, index) => <NoteItem note={note} key={index} handleClick={props.handleClick}/>)}
    </ul>
  );
}

export default NoteList;
