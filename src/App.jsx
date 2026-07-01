import { useState } from "react";
import NotesList from "./components/Notelist";

export default function App() {
  const [heading, setheading] = useState("");
  const [notes, setnotes] = useState([]);
  const [text, settext] = useState("");

  const formsubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title: heading,
      body: text,
      date: new Date().toLocaleString(),
    };

    setnotes((prev) => [...prev, newNote]);
    setheading("");
    settext("");
  };

  const deletenote=(id)=>{
    setnotes((prev)=>prev.filter((n)=>n.id!==id))
  }
  

 return (
  <div className="min-h-screen bg-[#141414] text-white">
    <main className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 p-8">
      {/* Form */}
      <form
        onSubmit={formsubmit}
        className="w-full lg:w-2/3 bg-[#1f1f1f] rounded-md p-8"
      >
        <h1 className="text-4xl font-bold text-red-600 mb-8">
          NotesFlix
        </h1>

        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Title
          </label>

          <input
            id="username"
            type="text"
            value={heading}
            onChange={(e) => setheading(e.target.value)}
            placeholder="Enter note title..."
            className="w-full rounded bg-[#2b2b2b] border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="about"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Notes
          </label>

          <textarea
            id="about"
            rows={8}
            value={text}
            onChange={(e) => settext(e.target.value)}
            placeholder="Write something..."
            className="w-full rounded bg-[#2b2b2b] border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-medium transition-colors"
        >
          Save Note
        </button>
      </form>

      {/* Notes */}
      <div className="w-full lg:w-1/3 bg-[#1f1f1f] rounded-md p-6">
        <h2 className="text-xl font-semibold text-red-600 mb-5">
          My Notes
        </h2>

        <NotesList
          notes={notes}
          ondelete={deletenote}
        />
      </div>
    </main>
  </div>
);
}
