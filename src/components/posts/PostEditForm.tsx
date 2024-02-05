import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import { PostProps } from "pages/home";
import React, { useCallback, useEffect, useState } from "react";
import { FiImage } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function PostEditForm() {
  const [content, setContent] = useState<string>("");
  const [post, setPost] = useState<PostProps | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  const getPost = useCallback(async () => {
    if (!params?.id) return;
    const docRef = doc(db, "posts", params.id);
    const docSnap = await getDoc(docRef);
    setPost({ ...(docSnap?.data() as PostProps), id: docSnap.id });
    setContent(docSnap?.data()?.content);
  }, [params?.id]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "content") setContent(value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!post) return;
      const postRef = doc(db, "posts", post?.id);
      await updateDoc(postRef, {
        content,
      });

      navigate(`/posts/${post?.id}`);
      toast.success("게시글을 수정했습니다.");
    } catch (error: any) {
      console.log(error);
      toast.error(error.code);
    }
  };

  const handleFileUpload = () => {};

  useEffect(() => {
    if (params?.id) getPost();
  }, [params?.id]);

  return (
    <form onSubmit={onSubmit} className="post-form">
      <textarea
        className="post-form__textarea"
        name="content"
        id="content"
        placeholder="What is happening?"
        onChange={onChange}
        value={content}
        required
      />
      <div className="post-form__submit-area">
        <label htmlFor="file-input" className="post-form__file">
          <FiImage className="post-form__file-icon" />
        </label>
        <input
          type="file"
          name="file-input"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
        <input type="submit" value="수정" className="post-form__submit-btn" />
      </div>
    </form>
  );
}
