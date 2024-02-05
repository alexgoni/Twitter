import PostForm from "components/posts/PostForm";
import PostBox from "components/posts/PostBox";

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

const posts: PostProps[] = [
  {
    id: "1",
    email: "goni000211@gmail.com",
    content: "내용입니다",
    createdAt: "2023-08-30",
    uid: "123123",
  },
  {
    id: "2",
    email: "goni000211@gmail.com",
    content: "내용입니다",
    createdAt: "2023-08-30",
    uid: "123123",
  },
  {
    id: "3",
    email: "goni000211@gmail.com",
    content: "내용입니다",
    createdAt: "2023-08-30",
    uid: "123123",
  },
  {
    id: "4",
    email: "goni000211@gmail.com",
    content: "내용입니다",
    createdAt: "2023-08-30",
    uid: "123123",
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For You</div>
        <div className="home__tab">Following</div>
      </div>
      <PostForm />
      {/* Tweet posts */}
      <div className="post">
        {posts?.map((post) => (
          <PostBox post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
