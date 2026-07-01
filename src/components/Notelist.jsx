import { NoteCard } from "./Notescard";

export default function NotesList(props) {
  

 

  return (
    <section id="notes-list" className="mt-8 max-w-3xl mx-auto space-y-4">
      <h4 className="text-xl font-medium text-gray-300 mb-2">Saved Notes</h4>

      <div className="grid grid-cols-1 gap-4">
        {props.notes?
        props.notes.map((n) => (
          <NoteCard key={n.id} title={n.title} body={n.body} date={n.date} />
        )):<p className="text-xl text-gray-400">No notes yet — your saved notes will appear here.</p>

}
      </div>
    </section>
  );
}