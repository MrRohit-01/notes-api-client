import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import "./Home.css";
import Nav from "react-bootstrap/Nav";
import { API } from "aws-amplify";
import { BsPencilSquare } from "react-icons/bs";
import { LinkContainer } from "react-router-bootstrap";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        onError(e);
      }
      setIsLoading(false);
    }
    onLoad();
  }, [isAuthenticated]);

  function loadNotes() {
    return API.get("notes", "/notes");
  }

  function renderNotes() {
    const rows = [];
    let currentRow = [];

    for (let i = 0; i < notes.length; i++) {
      const { noteId, content, createdAt } = notes[i];

      currentRow.push(
        <LinkContainer key={noteId} to={`/notes/${noteId}`}>
          <div className="NoteBox">
            <div className="content">
              <span className="font-weight-bold">
                {content.trim().split("\n")[0]}
              </span>
            </div>
            <div className="created-at">
              Created: {new Date(createdAt).toLocaleString()}
            </div>
          </div>
        </LinkContainer>
      );

      if (currentRow.length === 4 || i === notes.length - 1) {
        rows.push(<div className="NotesRow">{currentRow}</div>);
        currentRow = [];
      }
    }

    return <div className="NotesContainer">{rows}</div>;
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
        <LinkContainer to="/signup">
          <Nav.Link className="button-27">Signup</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
          <Nav.Link className="button-27">Login</Nav.Link>
        </LinkContainer>
      </div>
    );
  }

  function renderNotesList(notes) {
    return (
      <ListGroup>
        {!isLoading &&
          notes.map(({ noteId, content, createdAt }) => (
            <LinkContainer key={noteId} to={`/notes/${noteId}`}>
              <ListGroup.Item action>
                <span className="font-weight-bold">
                  {content.trim().split("\n")[0]}
                </span>
                <br />
                <span className="text-muted">
                  Created: {new Date(createdAt).toLocaleString()}
                </span>
              </ListGroup.Item>
            </LinkContainer>
          ))}
      </ListGroup>
    );
  }
  

  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}
