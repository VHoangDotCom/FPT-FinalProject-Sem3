import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { createComment } from "../redux/comment-product/commentProductSlice";

import { set } from "../redux/product-modal/productModalSlice";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { Add } from "@mui/icons-material";
import { cssNumber } from "jquery";


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const ReviewProduct = (props) => {
  const ElevatorId = props.dataReview.match.params.slug;
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [commentFeedback, setComment] = useState("");
  const [profile, setProfile] = useState({});
  const [orders, setOrders] = useState({});
  var getToken = JSON.parse(localStorage.getItem("dataUser"));


  useEffect(() => {
    async function fetchMyAPI() {
      var getToken = JSON.parse(localStorage.getItem("dataUser"));
      if(getToken){
        const getToken1 = getToken.access_token;
        let resData = await axios.get(
          "https://elevatorsystemdashboard.azurewebsites.net/api/Profile",
          {
            headers: {
              Authorization: `Bearer ${getToken1}`,
            },
          }
        );
        // console.log('resstda', resData);
         setProfile(resData.data.data);
      }
        else{
          console.log('1')
        }
      
    }

    fetchMyAPI();
  }, []);
  

 
  const dateNow = new Date();

  const stars = Array(5).fill(0);
  const urlFeedback =
    "https://elevatorsystemdashboard.azurewebsites.net/api/Feedbacks";

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const infoComment = {
    Description: commentFeedback,
    SatisfyingLevel: currentValue,
    ElevatorID: ElevatorId,
    Problem: dateNow,
    Improvement: profile.AddressLine2 ?profile.AddressLine2: "https://louisyoga.vn/themes/martfury/img/default-user.png",
  };
  
  const submitData = async (e) => {
    if(commentFeedback.length <= 0 && currentValue <= 0){
      toast.error("Error, Did not enter message and rating", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else{
      const getToken1 = getToken.access_token;
      e.preventDefault();
      axios
        .post(urlFeedback, infoComment, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken1}`,
          },
        })
        .then((result) => {
          // console.log('result', result);
          if (result.status == 200) {
            setComment("");
            setHoverValue(undefined);
            setCurrentValue(0);
            toast.success("Comment created successfully", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          else alert("Invalid User");
        });
      
    }
 
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-4col-12 mt-4">
        {/* <form> */}
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer />
        {getToken && getToken ? 
         <>
         <div className="form-group">
           <h4>Leave a comment</h4>
           <label for="message">Message</label>
           <textarea
             style={styles.textarea}
             name="msg"
             id=""
             msg
             cols="30"
             rows="5"
             value={commentFeedback}
             onChange={(e) => setComment(e.target.value)}
           ></textarea>
         </div>

         <div className="form-group">
           <label for="message" style={{ marginBottom: "10px" }}>
             Rate Star
           </label>
           <br />
           {/* <br></br> */}
           {stars.map((_, index) => {
             return (
               <FaStar
                 key={index}
                 value={currentValue}
                 size={24}
                 onClick={() => handleClick(index + 1)}
                 onMouseOver={() => handleMouseOver(index + 1)}
                 onMouseLeave={handleMouseLeave}
                 color={
                   (hoverValue || currentValue) > index
                     ? colors.orange
                     : colors.grey
                 }
                 style={{
                   marginRight: 10,
                   cursor: "pointer",
                 }}
               />
             );
           })}
         </div>

         <div className="form-group">
           <button style={styles.button} width={"50px"} onClick={submitData}>
             SUBMIT
           </button>
         </div>
         </>
         :
         <>
          <h5>You must be <a href="/login" style={{color: 'red !important'}}>logged</a> in to give feedback</h5>
          {/* <button></button> */}
         </>
      }
         
        {/* </form> */}
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0 0 0",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #cbbfbf",
    borderRadius: 5,
    padding: 5,
    margin: "10px 0",
    minHeight: 100,
    minWidth: "100%",
  },
  button: {
    marginTop: "10px",
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 100,
    padding: 10,
    backgroundColor: "#4267B2",
    color: "#fff",
    marginBottom: "10px",
  },
};

export default ReviewProduct;