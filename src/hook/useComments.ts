import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { commentsService } from "../services/commentsService";

export function useComments(videoId: string) {
  const { isSignedIn, getToken } = useAuth();
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const data = await commentsService.load(videoId);
      setComments(data);
    })();
  }, [videoId]);

  async function addComment(text: string) {
    if (!isSignedIn) {
      window.location.href = "/sign-in";
      return;
    }

    const token = await getToken();
    if (!token) return;

    const newComment = await commentsService.add(videoId, text, token);
    setComments((prev) => [newComment, ...prev]);
  }

  return { comments, addComment, isSignedIn };
}
