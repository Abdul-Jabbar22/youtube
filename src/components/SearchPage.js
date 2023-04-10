import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="1.25M"
        noOfVideos={382}
        description="You can find awaome programming lessons here ... "
      />
      <hr />
      <VideoRow
        image="https://tse1.mm.bing.net/th?&id=OVP.IiJdsHTS34rxkrTdjoXnfAHgFo&w=330&h=186&c=7&pid=1.7&rs=1"
        views="283K"
        subs="1.25M"
        description="Do you want a free on hour training.."
        timestamp=" 59 seconds ago"
        channel="Clever Programmer"
        title="🔴Lets build a youtube clone with React JS.."
      />{" "}
      <VideoRow
        image="https://tse1.mm.bing.net/th?&id=OVP.iu25AUuAqANUKl_uNA2zYwHgFo&w=330&h=186&c=7&pid=1.7&rs=1"
        views="431K"
        subs="1.25M"
        description="Do you want a free on hour training.."
        timestamp=" 59 seconds ago"
        channel="Clever Programmer"
        title="🔴Build a FaceBook clone with React JS.."
      />{" "}
      <VideoRow
        image="https://tse1.mm.bing.net/th?&id=OVP.Mu9Fpzrwn_nJRoel1tW4xQHgFo&w=330&h=186&c=7&pid=1.7&rs=1"
        views="865.7K"
        subs="1.25M"
        description="Do you want a free on hour training.."
        timestamp=" 9 months ago"
        channel="Clever Programmer"
        title="JavaScript Tutorial"
      />
      <VideoRow
        image="https://th.bing.com/th?id=OVP.zP1IwIKy_tVEGo1q6yn47gHgFo&w=606&h=340&c=7&rs=2&qlt=90&o=6&pid=1.7"
        views="225K"
        subs="1.25M"
        description="Do you want a free on hour training.."
        timestamp=" 7 months ago"
        channel="Clever Programmer"
        title="Python Tutorial"
      />
    </div>
  );
}

export default SearchPage;
