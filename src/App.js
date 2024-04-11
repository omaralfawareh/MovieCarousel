import "./App.css";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const { Content } = Layout;
function App() {
  return (
    <>
      <Layout className="layout">
        <Header />
        <Content className="content">
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
