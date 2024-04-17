import ContentHolder from "../components/ContentHolder";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";

export default function MainLayout({ children }) {
  return (
    <>
      {window.location !== "/login" && <Navbar></Navbar>}
      <ContentHolder csClasses="d_flex js_center w_60">
        <SearchInput />
      </ContentHolder>
      {children}
    </>
  );
}
