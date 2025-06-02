import UsersList from "./users-list/index";
import Counter from "./counter/index";
import PostsList from "./posts/index";
import { Navbar } from "@/layout/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <UsersList/>
      {/* <Counter />
      <PostsList /> */}
    </div>
  );
}
