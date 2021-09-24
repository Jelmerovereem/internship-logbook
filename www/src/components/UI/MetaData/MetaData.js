import { useEffect, useState } from "react";
import convertDate from "../../../modules/convertDate.js";
import { put } from "../../../modules/serverFetches.js";
import { containerStyle, metaDataContainer, dateStyle, iconStyle } from "./MetaDataStyle.js";
import { AiOutlineEye, AiOutlineCalendar } from "react-icons/ai";

const updateCount = async (id, blogData) => {
  blogData.viewersCount = blogData.viewersCount + 1;
  const response = await put({
    url: `/blog/${id}`,
    body: { blogData },
  });
  return response;
};

const MetaData = (props) => {
  const { date, viewersCount, blogId, blog } = props;

  const [viewersCountState, setViewersCount] = useState(0);

  useEffect(() => {
    updateCount(blogId, blog).then((response) => {
      setViewersCount(viewersCount + 1);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={containerStyle}>
      <div style={{...dateStyle, ...metaDataContainer}}>
        <AiOutlineCalendar style={iconStyle} />
        <span>{convertDate(new Date(date))}</span>
      </div>
      <div style={metaDataContainer}>
        <AiOutlineEye style={iconStyle} />
        <span>{viewersCountState}</span>
      </div>
    </div>
  );
};

export default MetaData;
