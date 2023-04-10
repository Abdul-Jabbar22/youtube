import React from "react";
import { Avatar } from "@mui/material";
import "./VideoCall.css";

function VideoCard({
  thumbnail,
  views,
  title,
  channel,
  timestamp,
  channelImage,
}) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={thumbnail} alt="" />
      <div className="videoCard__info">
        <Avatar className="video__avatar" alt={channel} src={channelImage} />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
