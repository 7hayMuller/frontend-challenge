import RedditPosts from "./RedditPosts";

import { useState } from "react";
import { Button, Col, Divider, Layout, Row } from "antd";
import "./App.css";

const { Header, Content } = Layout;

const App = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#6324C6",
  };

  const contentStyle: React.CSSProperties = {
    paddingInline: 56,
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
  };

  const [filter, setFilter] = useState<string>("hot");

  return (
    <Layout>
      <Header style={headerStyle}>REACTJS</Header>
      <Content style={contentStyle}>
        <Row justify="center" gutter={[16, 16]}>
          {" "}
          <Col>
            <Button onClick={() => setFilter("hot")}>Hot</Button>{" "}
          </Col>
          <Col>
            <Button onClick={() => setFilter("new")}>News</Button>{" "}
          </Col>
          <Col>
            <Button onClick={() => setFilter("rising")}>Rising</Button>
          </Col>
        </Row>
        <Divider />
        <RedditPosts subreddit="reactjs" filter={filter} />
      </Content>
    </Layout>
  );
};

export default App;
