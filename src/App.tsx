import { Button, Layout, List } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { useEffect, useState } from "react";

interface Data {
  id: string;
  title: string;
  permalink: string;
}

interface Post {
  data: Data;
}

const App = () => {
  const [itemsToShow, setItemsToShow] = useState(10);
  const [posts, setPosts] = useState<Post[]>([]);
  const subreddit = "reactjs";

  const loadMore = () => {
    setItemsToShow(itemsToShow + 5);
  };

  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#6324C6",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
  };

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}/.json`, {
      headers: { Accept: "application/json" },
    }).then((res) => {
      if (res.status !== 200) {
        console.warn("Warning: Something is wrong with the api.");
        return;
      }
      res.json().then(({ data }) => {
        if (data != null) setPosts(data.children);
      });
    });
  }, [subreddit]);

  return (
    <Layout>
      <Header style={headerStyle}>
        REACT<p>JS</p>
      </Header>
      <Content style={contentStyle}>
        <List
          dataSource={posts.slice(0, itemsToShow)}
          renderItem={({ data }) => (
            <List.Item>
              {" "}
              <a
                href={`https://www.reddit.com${data.permalink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.title}
              </a>
            </List.Item>
          )}
        />
        {/* {loading && (
          <Spin
            style={{ display: "block", textAlign: "center", marginTop: 16 }}
          />
        )} */}
      </Content>
      <Footer style={footerStyle}>
        {itemsToShow < posts.length && (
          <Button
            block
            type="primary"
            onClick={loadMore}
            style={{ marginTop: "16px" }}
          >
            Load More
          </Button>
        )}
      </Footer>
    </Layout>
  );
};

export default App;
