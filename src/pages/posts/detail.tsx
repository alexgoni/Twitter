import Loading from "components/loading/Loading";
import PostBox from "components/posts/PostBox";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import { PostProps } from "pages/home";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function PostDetail() {
  const [post, setPost] = useState<PostProps | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  const getPost = useCallback(async () => {
    if (!params?.id) return;
    const docRef = doc(db, "posts", params?.id);
    const docSnap = await getDoc(docRef);
    setPost({ ...(docSnap?.data() as PostProps), id: docSnap.id });
  }, [params?.id]);

  useEffect(() => {
    if (params?.id) getPost();
  }, [params?.id]);

  return (
    <div className="post">
      <div className="post__header">
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoIosArrowBack size={24} />
        </button>
      </div>
      {post ? <PostBox post={post} /> : <Loading />}
    </div>
  );
}
