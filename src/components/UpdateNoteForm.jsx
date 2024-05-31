// src/components/UpdateNoteForm.jsx
import React, { useState } from 'react';

const UpdateNoteForm = ({ note, onSubmit }) => {
  const [name, setName] = useState(note.name);
  const [description, setDescription] = useState(note.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: note.id, name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateNoteForm; // Exportación por defecto

// Si necesitas una exportación con nombre
export { UpdateNoteForm };
