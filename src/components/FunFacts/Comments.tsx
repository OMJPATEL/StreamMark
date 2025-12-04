import { useState } from "react";
import { useComments } from "../../hook/useComments";
import "./Comments.css";

export default function Comments({ videoId }: { videoId: string }) {
  const { comments, addComment, isSignedIn } = useComments(videoId);
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    addComment(text);
    setText("");
  };

  return (
    <div className="comments-container">
      <h4>Comments</h4>

      <div className="comments-list">
        {comments.map((c) => (
          <div key={c.id} className="comment-item">
            <strong>User {c.user?.clerkId ?? "Unknown"}</strong>
            <p>{c.text}</p>
          </div>
        ))}

        {comments.length === 0 && (
          <p className="no-comments">No comments yet.</p>
        )}
      </div>

      <div className="comment-input">
        {isSignedIn ? (
          <>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a comment..."
            />
            <button onClick={submit}>Post</button>
          </>
        ) : (
          <p className="login-msg">
            <a href="/sign-in">Log in to comment</a>
          </p>
        )}
      </div>
    </div>
  );
}
