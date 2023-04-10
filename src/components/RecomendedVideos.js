import React from "react";
import "./RecomendedVideos.css";
import VideoCard from "./VideoCard";

function RecomendedVideos() {
  return (
    <div className="recomendedVideos">
      <h2>Recommended</h2>
      <div className="recomendedVideos__videos">
        <VideoCard
          title="Become a web developer in 10 minuts"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://avatars.githubusercontent.com/u/60327839?s=280&v=4"
          thumbnail="https://th.bing.com/th/id/OIP.GJV-uUPBamKY0dzAudIgSgHaEK?pid=ImgDet&rs=1"
        />
        <VideoCard
          title="Become a web developer in 10 minuts"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage=""
          thumbnail="https://cdn.sanity.io/images/7g6d2cj1/production/e7427bf69b3405f287e16607f827f630bb2e607b-1280x720.jpg?w=1200&q=70&auto=format"
        />
        <VideoCard
          title="Become a web developer in 10 minuts"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage=""
          thumbnail="https://th.bing.com/th/id/OIP.MEgTcpMczu0X1bjG1ZWknwHaEK?pid=ImgDet&rs=1"
        />
        <VideoCard
          title="Become a web developer in 10 minuts"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage=""
          thumbnail="https://th.bing.com/th/id/OIP.vbO9BcNKohrPVjWdwD9xPQHaEK?pid=ImgDet&rs=1"
        />
        <VideoCard
          title="Welcome, to complete javaScript Tutorial for beginners"
          views="2.7M Views"
          timestamp="Jan 12,2021"
          channelImage=""
          thumbnail="https://th.bing.com/th/id/R.a971a13dbe47b913b6e82e06e69a9c9a?rik=GatpZPzywjD2jw&pid=ImgRaw&r=0"
        />
        <VideoCard
          title=""
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage=""
          thumbnail="https://th.bing.com/th/id/R.7463653a0901901312c6a32e17bfce41?rik=c9zCt02HHTVeNA&pid=ImgRaw&r=0"
        />
        <VideoCard
          title="Become a web developer in 10 minuts"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage=""
          thumbnail="https://th.bing.com/th/id/R.b3ee7f2eead2628399ed93120a3e19c3?rik=ipAyMjPVF0lccw&pid=ImgRaw&r=0"
        />
      </div>
    </div>
  );
}

export default RecomendedVideos;
