// NoteCard.jsx


export function NoteCard({ id=1, title = "Note title", body = "Note body", date = "Just now" , ondelete=null}) {
  return (
    <article className="w-full rounded-lg bg-white/5 border border-white/6 p-4 shadow-sm">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-gray-300">{date}</p>
        </div>
        <div className="text-sm text-gray-400"> 
          <button className="px-2 py-1 rounded-md hover:bg-white/6">⋯</button>
        </div>
      </header>

      <div className="mt-3">
        <p className="text-sm text-gray-200 leading-relaxed">{body}</p>
      </div>

      <footer className="mt-4 flex items-center justify-end gap-2">
        <button className="text-xs text-indigo-400 hover:underline">Edit</button>
        <button className="text-xs text-red-400 hover:underline active:scale-95 cursor-pointer"
        onClick={()=>ondelete(id)}>Delete</button>
      </footer>
    </article>
  );
}
