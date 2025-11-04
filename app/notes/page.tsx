"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

interface Note {
  id: number;
  title: string;
}

export default function NotesPage() {
  const { data: session } = useSession();
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {
    if (!title.trim()) return alert("Please enter a note");
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchNotes();
  };

  const deleteNote = async (id: number) => {
    await fetch("/api/notes", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchNotes();
  };

  const updateNote = async () => {
    if (!editingId) return;
    await fetch("/api/notes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: editingId, title }),
    });
    setEditingId(null);
    setTitle("");
    fetchNotes();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📝 Notes App (Authenticated)</h1>
      <p>Welcome, {session?.user?.name}</p>
      <button
        onClick={() => signOut()}
        style={{
          marginTop: "10px",
          marginBottom: "20px",
          background: "red",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
        }}
      >
        Logout
      </button>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter your note..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        {editingId ? (
          <button
            onClick={updateNote}
            style={{
              padding: "8px 12px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Update
          </button>
        ) : (
          <button
            onClick={addNote}
            style={{
              padding: "8px 12px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Add
          </button>
        )}
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.length === 0 ? (
          <p>No notes available.</p>
        ) : (
          notes.map((note) => (
            <li
              key={note.id}
              style={{
                background: "#f3f3f3",
                marginBottom: "8px",
                padding: "10px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "black",
              }}
            >
              <span>{note.title}</span>
              <div>
                <button
                  onClick={() => {
                    setEditingId(note.id);
                    setTitle(note.title);
                  }}
                  style={{
                    background: "orange",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 8px",
                    marginRight: "5px",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 8px",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
