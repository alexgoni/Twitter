import PostForm from "components/posts/PostForm";
import PostBox from "components/posts/PostBox";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "firebaseApp";

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileUrl?: string;
  likes?: string[];
  likeCount?: number;
  comments?: any;
}

export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    let postsRef = collection(db, "posts");
    let postsQuery = query(postsRef, orderBy("createdAt", "desc"));

    onSnapshot(postsQuery, (snapShot) => {
      let dataObj = snapShot.docs.map((doc) => ({
        id: doc?.id,
        ...doc.data(),
      }));
      setPosts(dataObj as PostProps[]);
    });
  }, []);

  return (
    <div className="home">
      <div className="home__top">
        <div className="home__title">Home</div>
        <div className="home__tabs">
          <div className="home__tab home__tab--active">For You</div>
          <div className="home__tab">Following</div>
        </div>
      </div>
      <PostForm />
      <div className="post">
        {posts?.length > 0 ? (
          posts?.map((post) => <PostBox post={post} key={post.id} />)
        ) : (
          <div className="post__no-posts">
            <span>게시글이 없습니다.</span>
          </div>
        )}
      </div>
    </div>
  );
}
