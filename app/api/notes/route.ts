
import { NextResponse } from "next/server";

interface Note {
  id: number;
  title: string;
}

let notes: Note[] = [];

export async function GET() {
  return NextResponse.json(notes);
}

export async function POST(req: Request) {
  const { title } = await req.json();
  if (!title) {
    return NextResponse.json({ message: "Title is required" }, { status: 400 });
  }

  const newNote: Note = { id: Date.now(), title };
  notes.push(newNote);
  return NextResponse.json({ message: "Note added", note: newNote });
}

export async function PUT(req: Request) {
  const { id, title } = await req.json();
  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Note not found" }, { status: 404 });
  }

  notes[index].title = title;
  return NextResponse.json({ message: "Note updated", note: notes[index] });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  notes = notes.filter((note) => note.id !== id);
  return NextResponse.json({ message: "Note deleted", id });
}

