import { LoadingOutlined } from "@ant-design/icons";
import { Avatar, Button, List, Modal, Row, Skeleton, Spin } from "antd";
import { useEffect, useState } from "react";

interface Data {
  id: string;
  title: string;
  permalink: string;
  media: string;
  author: string;
  created: Date;
}

interface Post {
  data: Data;
}

interface RedditPostsProps {
  subreddit: string;
  filter: string;
  darkMode?: boolean;
}

const RedditPosts = ({ subreddit, filter, darkMode }: RedditPostsProps) => {
  const [itemsToShow, setItemsToShow] = useState(10);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMore = () => {
    setItemsToShow(itemsToShow + 5);
  };

  const formatTimeElapsed = (timestampInSeconds: number) => {
    const now = Math.floor(Date.now() / 1000);
    const timeElapsed = now - timestampInSeconds;

    if (timeElapsed >= 86400) {
      const date = new Date(timestampInSeconds * 1000);
      return `em ${date.toLocaleDateString()}`;
    } else if (timeElapsed >= 3600) {
      const hours = Math.floor(timeElapsed / 3600);
      return `há ${hours} ${hours === 1 ? "hora" : "horas"} atrás`;
    } else if (timeElapsed >= 60) {
      const minutes = Math.floor(timeElapsed / 60);
      return `há ${minutes} ${minutes === 1 ? "minuto" : "minutos"} atrás`;
    } else {
      return "agora";
    }
  };

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(
          `https://www.reddit.com/r/${subreddit}/${filter}.json`,
          {
            headers: { Accept: "application/json" },
          }
        );

        if (!response.ok) {
          Modal.error({ content: "Ocorreu um erro inesperado :(" });
          return;
        }

        const jsonData = await response.json();
        if (jsonData.data) {
          setItemsToShow(10);
          setPosts(jsonData.data.children);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [subreddit, filter]);

  return (
    <>
      {posts && posts.length ? (
        <>
          <List
            className="list"
            itemLayout="vertical"
            dataSource={posts.slice(0, itemsToShow)}
            renderItem={({ data }) => (
              <List.Item>
                <Skeleton
                  avatar={{ shape: "square", size: "large" }}
                  title={false}
                  loading={loading}
                  active
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar shape="square" size={64} src={data.media} />
                    }
                    title={
                      <a
                        className={darkMode ? "dark-mode" : ""}
                        href={`https://www.reddit.com${data.permalink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.title}
                      </a>
                    }
                    description={
                      <Row>
                        <p>{`enviado ${formatTimeElapsed(
                          Number(data.created)
                        )} por`}</p>
                        <p className="description-author">{`${data.author}`}</p>
                      </Row>
                    }
                  />
                </Skeleton>
              </List.Item>
            )}
          />
          {itemsToShow < posts.length && (
            <Button
              id="more"
              className="selected"
              block
              type="primary"
              onClick={loadMore}
            >
              + Ver mais
            </Button>
          )}
        </>
      ) : (
        <Row align="middle" justify="center" style={{ marginTop: "20%" }}>
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 50, color: "#6324c6" }}
                spin
              />
            }
            size="large"
          />
        </Row>
      )}
    </>
  );
};

export default RedditPosts;
