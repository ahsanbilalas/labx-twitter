import { FC } from "react";
import CommentIcon from "elements/Icons/Comment";
import LikeIcon from "elements/Icons/Like";
import RetweetIcon from "elements/Icons/Retweet";
import ShareIcon from "elements/Icons/Share";
import { useAppDispatch } from "store";
import { openPostComments, openRetweet, likePost, sharePost } from "store/thunks/tweet";

interface StatsProps {}

const Stats: FC<StatsProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center py-4">
      <div onClick={() => dispatch(openPostComments())} className="flex-1 flex items-center text-primary text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
        <CommentIcon />
        12.3 k
      </div>
      <div onClick={() => dispatch(openRetweet())} className="flex-1 flex items-center text-primary text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
        <RetweetIcon />
        14 k
      </div>
      <div onClick={() => dispatch(likePost())} className="flex-1 flex items-center text-primary text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
        <LikeIcon />
        14 k
      </div>
      <div onClick={() => dispatch(sharePost())} className="flex-1 flex items-center text-primary text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
        <ShareIcon />
      </div>
    </div>
  );
};

export default Stats;
