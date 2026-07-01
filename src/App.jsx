import { useState } from "react";
import NotesList from "./components/Notelist";



export default function App() {

const [heading, setheading] = useState("");
const [notes, setnotes] = useState([]);
const [text, settext] = useState("");

const formsubmit=(e)=>{
  e.preventDefault(); 
 const newNote = {
      id: Date.now(),
      title: heading,
      body: text,
      date: new Date().toLocaleString(),
    };

setnotes((prev)=>[...prev,newNote])
setheading("");
settext("");
  
  

  
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <main className="max-w-3xl mx-auto">
        <form className="space-y-12" onSubmit={formsubmit}>
          <section className="border-b border-white/10 pb-12">
            <div
              id="image"
              className="rounded-md overflow-hidden bg-gray-800 bg-cover bg-center"
            >
              <div className="p-8">
                <h1 className="text-5xl font-bold tracking-wide leading-tight ">
                  Notesapp
                </h1>

                <div className="mt-10 mb-12">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-xl font-medium text-white mb-2"
                    >
                      Heading of the note
                    </label>

                    <div className="mt-2">
                      <div className="flex items-center rounded-md bg-white/5 pl-3 outline outline-white/10 focus-within:outline-2 focus-within:outline-indigo-500">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Write the heading here"
                          className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none"
                          value={heading}
                          onChange={(e)=>{
                            setheading(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full mt-8">
                    <label
                      htmlFor="about"
                      className="block text-xl font-medium text-white mb-2"
                    >
                      Notes
                    </label>

                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={6}
                        value={text}
                        placeholder="write about it here..."
                        className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
                        onChange={(e)=>{
                            settext(e.target.value);
                          }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-600 transition"
            >
              Save
            </button>
          </section>
        </form>

        <NotesList notes={notes} />
      </main>
    </div>
  );
}
