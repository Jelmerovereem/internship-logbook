import { useEffect, useState } from "react";
import { get } from "../modules/serverFetches";
import { Link } from "react-router-dom";
import {
  Loading,
  ArticleSlider,
  ArticleCard,
  BlogHeader,
  MetaData,
} from "../components/UI";
import { BlogContent } from "../components/UI";
import { useHistory } from "react-router";
import styled from "styled-components";

const getBlog = async (id) => {
  const response = await get({ url: `/blogPost/${id}` });
  console.log(response);
  return response;
};

const getAllBlogs = async () => {
  const response = await get({ url: "/blogs" });
  return response;
};

const PageWrapper = styled.div`
  position: relative;
`;

const BackBtn = styled(Link)`
  position: absolute;
  top: 40px;
  left: 20px;
`

const BlogPage = (props) => {
  let history = useHistory();
  const [blogData, setBlogData] = useState({
    blogTitle: "",
    blogContent: "",
    publish: true,
    viewersCount: 0,
    headerImage: "",
  });
  const [blogLoaded, setBlogLoaded] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  const {
    match: {
      params: { id },
    },
  } = props;
  //const {id} = props;

  useEffect(() => {
    getBlog(id).then((res) => {
      if (res.status === 200) {
        setBlogData(res.blogData);
        setBlogLoaded(true);
      } else {
        history.push("/404");
      }
    });

    getAllBlogs().then((res) => {
      const filteredBlogs = res.blogs.filter((b) => b._id !== id);
      setAllBlogs(filteredBlogs);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrapper>
      <BackBtn to="/"> &lt; </BackBtn>
      {blogLoaded ? (
        <>
          {Object.keys(blogData).length > 0 && (
            <>
              {blogData.headerImage ? <BlogHeader blogData={blogData} /> : ""}
              <MetaData
                blog={blogData}
                date={blogData.date}
                blogId={blogData._id}
                viewersCount={blogData.viewersCount}
              />
              <BlogContent blogContent={blogData.blogContent} />
            </>
          )}
          {allBlogs.length > 0 ? (
            <ArticleSlider>
              {allBlogs.map((blog) => {
                return (
                  <ArticleCard
                    href={`/blog/${blog._id}`}
                    blogData={blog}
                    key={blog._id}
                  />
                );
              })}
            </ArticleSlider>
          ) : (
            ""
          )}
        </>
      ) : (
        <Loading />
      )}
    </PageWrapper>
  );
};

export default BlogPage;
