import RedditPosts from "./RedditPosts";

import { useState } from "react";
import { Button, Col, Divider, Layout, Row, Switch } from "antd";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import "./App.css";

const { Header, Content } = Layout;

const App = () => {
  const contentStyle: React.CSSProperties = {
    paddingInline: 56,
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
  };

  const [filter, setFilter] = useState<string>("hot");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Layout style={{ backgroundColor: darkMode ? "#1e1e1e" : "#fff" }}>
      <Header className="custom-header">
        <p>REACT</p>
      </Header>
      <Content style={contentStyle}>
        <Row justify="end" style={{ marginTop: 10 }}>
          <Switch
            checkedChildren={<FaRegMoon />}
            unCheckedChildren={<FaRegSun />}
            onChange={toggleDarkMode}
          />
        </Row>
        <Row justify="center" gutter={[16, 8]} wrap={false}>
          {" "}
          <Col>
            <Button
              className={filter === "hot" ? "selected" : "button"}
              onClick={() => setFilter("hot")}
            >
              Hot
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className={filter === "new" ? "selected" : "button"}
              onClick={() => setFilter("new")}
            >
              News
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className={filter === "rising" ? "selected" : "button"}
              onClick={() => setFilter("rising")}
            >
              Rising
            </Button>
          </Col>
        </Row>
        <Divider />
        <RedditPosts subreddit="reactjs" filter={filter} darkMode={darkMode} />
      </Content>
    </Layout>
  );
};

export default App;
