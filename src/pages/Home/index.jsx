import ContentHolder from "../../components/ContentHolder";
import Carrousel from "../../components/Carrousel";
import Layout from "../../Layouts/Layout";
import SearchInput from "../../components/SearchInput";

export default function Home() {
  return (
    <Layout>
      <ContentHolder csClasses='d_flex js_center w_60'>
        <SearchInput/>
      </ContentHolder>
      <ContentHolder csClasses='d_flex js_center mt_3 w_60'>
        <Carrousel/>
      </ContentHolder>
    </Layout>
  );
}
