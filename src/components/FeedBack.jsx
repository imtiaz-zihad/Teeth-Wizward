/* eslint-disable react/prop-types */
import { SlCalender } from "react-icons/sl";
const FeedBack = ({ feedBackData }) => {
  console.log(feedBackData);

  return (
    <div className="grid grid-cols-3 gap-6 w-[90%] mx-auto max-w-[1200px] mt-10"> 
      {
        // eslint-disable-next-line react/prop-types
        feedBackData.map((feed) => (
          <div
            key={feed.id}
            className="card bg-base-100   shadow-xl"
          >
            
             <div className="flex pl-6 gap-2 items-center ">
             <img className="w-10 h-10 rounded-full" src={feed.userImg} alt="Shoes" />
             <h2 className="card-title">{feed.name}</h2>
             </div>

             <div  className="flex ml-20 items-center gap-2">
             <SlCalender />
             <p className=" text-gray-400">{new Date().toLocaleDateString()}</p>
             </div>
           
           
            <div className="card-body">
              
              <p>{feed.review}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default FeedBack;
