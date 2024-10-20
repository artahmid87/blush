import Container from "../ui/Container";
import BlogSidebar from "./sideBar";

const Layout = ({ children }) => {
  return (
    <Container>
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 py-20 bg-white">
      <main className="">{children}</main>
      <BlogSidebar/>
    </div>
    </Container>
  );
};


export default Layout;
