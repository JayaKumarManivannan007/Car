
import { NextResponse } from "next/server";

interface FeedbackEntry {
  id: number;
  name: string;
  feedback: string;
  createdAt: string;
}

let feedbackEntries: FeedbackEntry[] = [];

export async function POST(request: Request) {
  try {
    const { name, feedback } = await request.json();

    if (!name || !feedback) {
      return NextResponse.json(
        { message: "Name and feedback are required." },
        { status: 400 }
      );
    }

    const newEntry: FeedbackEntry = {
      id: Date.now(),
      name,
      feedback,
      createdAt: new Date().toISOString(),
    };

    feedbackEntries.push(newEntry);

    return NextResponse.json({
      message: "Feedback-------- submitted successfully",
      entry: newEntry,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error submitting feedback" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(feedbackEntries);
}
