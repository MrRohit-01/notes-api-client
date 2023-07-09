import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdDelete } from "react-icons/md";

const Items = ({ noteId, content, createdAt, attachment }) => {
  const [link, setLink] = useState("");
  const onLoad = async () => {
    const templink = await Storage.vault.get(attachment);
    console.log(templink);
    setLink(templink);
  };
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <LinkContainer className="linker" key={noteId} to={`/notes/${noteId}`}>
      <ListGroup.Item action className="custom-note-item">
        <div className="note-content">
          <span className="note-title">{content.trim().split("\n")[0]}</span>
          <br />
          {link ? (
            <img
              src={link}
              alt="lomnon"
              className="attachment-img"
              onError={() => {
                setLink("");
              }}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="note-date">
          Created: {new Date(createdAt).toLocaleString()}
        </div>
        {/* <button className="delete" onClick={handleDelete}>
        <MdDelete /> Delete
      </button> */}
      </ListGroup.Item>
    </LinkContainer>
  );
};

export default Items;