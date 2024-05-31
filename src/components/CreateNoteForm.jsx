import { validateEnum } from "../helpers/validateEnum";
import { validateNonEmpty } from "../helpers/validateNonEmpty";
import { validateType } from "../helpers/validateType";
import noteService from "../services/notes/notesService";
export const CreateNoteForm = ({
  note,
  setNote,
  newName,
  setNewName,
  newDescription,
  setDescription,
  newImportant,
  setImportant,
  newStatus,
  setStatus,
  newDue_Date,
  setDue_Date,
}) => {
  const addNewNote = (event) => {
    event.preventDefault();
    const newNote = {
      name: newName,
      description: newDescription,
      important: Boolean(newImportant),
      status: newStatus,
      due_date: newDue_Date,
    };
    if (
      validateType(newNote) &&
      validateNonEmpty(newNote) &&
      validateEnum(newNote.status)
    ) {
      noteService.create(newNote).then((data) => {
        setNote([...note, data]);
      });
    }
  };
  return (
    <div className="container">
      <h2>Add a New Note:</h2>
      <form onSubmit={addNewNote}>
        <div className="form-group">
          <label htmlFor="new-Name">Name:</label>
          <input
            id="new-Name"
            value={newName}
            onChange={setNewName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-Description">Description:</label>
          <input
            id="new-Description"
            value={newDescription}
            onChange={setDescription}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-Important">Important:</label>
          <input
            id="new-Important"
            value={newImportant}
            onChange={setImportant}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-Status">Status:</label>
          <input
            id="new-Status"
            value={newStatus}
            onChange={setStatus}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-Due_Date">Due Date:</label>
          <input
            id="new-Due_Date"
            value={newDue_Date}
            onChange={setDue_Date}
            className="form-control"
          />
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};