import { useState, useEffect } from "react";
import socket from "@/utils/socketConfigf";
import axios from "axios";

const IdeaCommentSection = ({ ideaId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/idea/${ideaId}/comment`,
        );
        setComments(response.data.comments);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();

    socket.on("commentAdded", (comment) => {
      if (comment.ideaId === ideaId) {
        setComments((prevComments) => [...prevComments, comment]);
      }
    });

    socket.on("commentDeleted", (commentId) => {
      setComments((prevComments) =>
        prevComments.filter((c) => c.id !== commentId),
      );
    });

    return () => {
      socket.off("commentAdded");
      socket.off("commentDeleted");
    };
  }, [ideaId]);

  const addComment = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/comment/add`, {
        ideaId,
        content: newComment,
      });
      setNewComment("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/comment/delete/${commentId}`,
      );
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <p>{comment.content}</p>
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div className="add-comment">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="comment-input"
        />
        <button onClick={addComment} className="comment-button">
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default IdeaCommentSection;
