import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

import axios from "axios";
const ListComment = (props) => {
  const { commentProductId } = props;
  const [comments, setComments] = useState([]);
  const [currentValue, setCurrentValue] = useState(0);
  const stars = Array(5).fill(0);
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  useEffect(() => {
    setInterval(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://elevatorsystemdashboard.azurewebsites.net/api/GetFeedbackByElevatorID/${commentProductId}`
      );
      if (data.status == 200) {
        setComments(data.data.datas);
      } else {
        alert("loi");
      }
    };
    fetchData();
    }, 3000);
  }, []);
  //  console.log('comments', comments)

  // const sortedActivities = comments.sort((a, b) => b.Problem - a.Problem)
  const sortedDate = comments.sort((a,b) =>  new Date(b.Problem) - new Date(a.Problem));
  return (
    <>
      <div className="col-sm-12 col-md-6 col-12 col-lg-6 pb-4">
        <h4>{comments.length} Comments</h4>
        {comments.length <= 0 ? (
          <>
            <p>There are no comments yet</p>
          </>
        ) : (
          <>
            {sortedDate.map(
              (item, index) => {
                return (
                  
                  <div className="comment mt-4 text-justify float-left">
                    <img
                      src={item.Improvement}
                      alt=""
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h4> {item.Username}</h4>
                    <span> - {new Date(item.Problem).toLocaleString()}</span>
                    <br />
                    <span>
                      {/* {item.SatisfyingLevel} */}
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            value={item.SatisfyingLevel}
                            size={24}
                            //  onClick={() => handleClick(index + 1)}
                            //  onMouseOver={() => handleMouseOver(index + 1)}
                            //  onMouseLeave={handleMouseLeave}
                            color={
                              item.SatisfyingLevel > index ? colors.orange : colors.grey
                            }
                            style={{
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        );
                      })}
                    </span>
                    <p>{item.Description}</p>
                  </div>
                );
              }

              // }
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ListComment;
