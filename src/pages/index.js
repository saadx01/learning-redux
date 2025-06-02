import UsersList from "./components/UsersList";
import Counter from "./components/ComponentUsingRedux";
import PostsList from "./components/postsList";


export default function Home() {
  return (
    <div>
      <UsersList/>
      <Counter />
      <PostsList />
    </div>
  );
}
