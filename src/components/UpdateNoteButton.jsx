// src/components/UpdateNoteButton.jsx
import React from 'react';

// Si prefieres usar una importación con nombre
import { UpdateNoteForm } from './UpdateNoteForm';

// Aquí el resto del código para UpdateNoteButton
const UpdateNoteButton = ({ note, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedNote) => {
    onUpdate(updatedNote);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <UpdateNoteForm note={note} onSubmit={handleUpdate} />
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default UpdateNoteButton;

export { UpdateNoteButton };
