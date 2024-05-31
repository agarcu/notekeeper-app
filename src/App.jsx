import { NotesList, CreateNoteForm } from "./components";
import { useCreateForm, useNote } from "./hooks";

function App() {
  const {
    newName,
    newDescription,
    newImportant,
    newStatus,
    newDue_Date,
    handleNewNameValue,
    handleNewDescriptionValue,
    handleNewImportantValue,
    handleNewStatusValue,
    handleNewDue_DataValue,
  } = useCreateForm();
  const { note, handleNote } = useNote();
  return (
    <>
      <h1>notekeeper-app</h1>
      <NotesList note={note} setNote={handleNote} />
      <CreateNoteForm
        note={note}
        setNote={handleNote}
        newName={newName}
        setNewName={handleNewNameValue}
        newDescription={newDescription}
        setDescription={handleNewDescriptionValue}
        newImportant={newImportant}
        setImportant={handleNewImportantValue}
        newStatus={newStatus}
        setStatus={handleNewStatusValue}
        newDue_Date={newDue_Date}
        setDue_Date={handleNewDue_DataValue}
      />
    </>
  );
}

export default App;