import { useState, useEffect } from "react";
import { get } from "../../modules/serverFetches";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";
import { Loading, Dropdown, Colors, BlogContent } from "../UI";
import convertDate from "../../modules/convertDate";
import { containerStyle as defaultContainerStyle } from "./BlogsStyle";
import BlogIcon from "../../assets/blog.js";
import styled from "styled-components";

const BlogsData = async () => {
  const response = await get({ url: "/blogs" });
  return response;
};

const Blogs = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 20px;
  min-height: 600px;
  //transform: translateY(-100px);
  transition: width 2s;
`;

const BlogsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  width: 80%;
  margin: 50px auto 0;
`;

const BlogElement = styled.div`
  //justify-content: center;
  min-height: 300px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

const DateSpan = styled.span`
  color: grey;
  text-transform: capitalize;
  text-align: left;
  display: block;
  font-size: 14px;
  margin-top: 20px;
`;

const BlogTitle = styled.h2`
  text-align: left;
`;

const EmptyStateContainer = styled.div`
  width: 70%;
  margin: 100px auto;
  text-align: center;
`;

const BlogIconContainer = styled.div`
  display: inline-block;
  width: 6%;
`;

const Wrapper = styled.div`
  background: #eee;
`;

const BlogsEl = () => {
  const history = useHistory();
  const [loadedBlogs, setLoadedBlogs] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [sortValue, setSortValue] = useState("date");

  const browseToBlog = (id) => {
    history.push(`/blog/${id}`);
  };

  useEffect(() => {
    BlogsData().then((res) => {
      //setTimeout(() => setLoadedBlogs(true), 1000);
      setLoadedBlogs(true);

      const filteredBlogs = res.blogs.filter((b) => b.publish);
      const sortedBlogs = filteredBlogs.sort((a, b) => {
        if (sortValue === "date") {
          return new Date(b.date) - new Date(a.date);
        } else if (sortValue === "viewersCount") {
          return b.viewersCount - a.viewersCount;
        }
        return new Date(b.date) - new Date(a.date);
      });

      setBlogs(sortedBlogs);
    });
  }, []);

  useEffect(() => {
    const sortedBlogs = blogs.sort((a, b) => {
      if (sortValue === "date") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortValue === "viewersCount") {
        return b.viewersCount - a.viewersCount;
      }
      return new Date(b.date) - new Date(a.date);
    });

    setBlogs([...sortedBlogs]);
  }, [sortValue]);

  return (
    <>
      {loadedBlogs ? (
        <Wrapper>
          <Fade bottom duration={2000}>
            <Blogs>
              {blogs.length > 0 ? (
                <>
                  <Dropdown
                    onChange={(event) => setSortValue(event.target.value)}
                  >
                    <option value="date">By date</option>
                    <option value="viewersCount">By views</option>
                  </Dropdown>
                  <BlogsContainer>
                    {blogs.map((blog, i) => {
                      return (
                        <Fade
                          bottom={i % 4 === 0}
                          left={i % 4 === 1}
                          right={i % 4 === 2}
                          top={i % 4 === 3}
                          key={blog._id}
                        >
                          <BlogElement onClick={() => browseToBlog(blog._id)}>
                            <ImageContainer>
                              <img src={blog.headerImage} alt="blog header" />
                            </ImageContainer>
                            <DateSpan>
                              {convertDate(new Date(blog.date), "a-dd-mm-yy")}
                            </DateSpan>
                            <BlogTitle>{blog.blogTitle}</BlogTitle>
                          </BlogElement>
                        </Fade>
                      );
                    })}
                  </BlogsContainer>
                </>
              ) : (
                <EmptyStateContainer>
                  <BlogIconContainer>
                    <BlogIcon />
                  </BlogIconContainer>
                  <p>Er zijn helaas nog geen posts</p>
                </EmptyStateContainer>
              )}
            </Blogs>
          </Fade>
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default BlogsEl;
