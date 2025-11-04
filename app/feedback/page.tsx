"use client";

import React, { useState, useEffect } from "react";

interface FeedbackEntry {
  id: number;
  name: string;
  feedback: string;
  createdAt: string;
}

export default function FeedbackPage() {
  const [name, setName] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [entries, setEntries] = useState<FeedbackEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchFeedback = async () => {
    const res = await fetch("/api/feedback");
    const data = await res.json();
    setEntries(data);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, feedback }),
    });

    if (res.ok) {
      setName("");
      setFeedback("");
      await fetchFeedback();
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Feedback Form</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          placeholder="Your Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            minHeight: "100px",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: "#0070f3",
            color: "white",
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      <h2>Submitted Feedback</h2>
      {entries.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {entries.map((entry) => (
            <li
              key={entry.id}
              style={{
                background: "#f9f9f9",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              <strong>{entry.name}</strong>
              <p>{entry.feedback}</p>
              <small style={{ color: "#888" }}>
                Submitted on {new Date(entry.createdAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
