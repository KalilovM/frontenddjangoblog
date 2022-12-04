import SinglePost from "../src/components/posts/singlePost/SinglePost";
import WrapperGrid from "../src/components/posts/wrapper/WrapperGrid";
import Sidebar from "../src/components/sidebar/Sidebar";

export default function Home() {
  return (
    <WrapperGrid>
      <SinglePost />
      <Sidebar />
    </WrapperGrid>
  );
}
