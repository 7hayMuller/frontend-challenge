import { Avatar, Button, List, Skeleton } from "antd";
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
}

const RedditPosts = ({ subreddit, filter }: RedditPostsProps) => {
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
    fetch(`https://www.reddit.com/r/${subreddit}/${filter}.json`, {
      headers: { Accept: "application/json" },
    }).then((res) => {
      if (res.status !== 200) {
        console.warn("Warning: Something is wrong with the api.");
        setLoading(false);
        return;
      }
      res.json().then(({ data }) => {
        if (data != null) {
          setPosts(data.children);
          setLoading(false);
        }
      });
    });
  }, [subreddit, filter]);

  return (
    <>
      <List
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
                avatar={<Avatar shape="square" size={64} src={data.media} />}
                title={
                  <a
                    href={`https://www.reddit.com${data.permalink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.title}
                  </a>
                }
                description={`enviado ${formatTimeElapsed(
                  Number(data.created)
                )} por ${data.author}`}
              />
            </Skeleton>
          </List.Item>
        )}
      />
      {itemsToShow < posts.length && (
        <Button block type="primary" onClick={loadMore}>
          + Ver mais
        </Button>
      )}
    </>
  );
};

export default RedditPosts;
