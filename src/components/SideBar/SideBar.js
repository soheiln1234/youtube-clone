import styles from "./SideBar.module.css";

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubcriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibaryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumpsUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import SideBarRow from "./SideBarRow/SideBarRow";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <SideBarRow selected title="Home" Icon={HomeIcon} />
      <SideBarRow title="Trending" Icon={WhatshotIcon} />
      <SideBarRow title="Subcription" Icon={SubcriptionsIcon} />
      <hr />
      <SideBarRow title="Libary" Icon={VideoLibaryIcon} />
      <SideBarRow title="History" Icon={HistoryIcon} />
      <SideBarRow title="Your Videos" Icon={OndemandVideoIcon} />
      <SideBarRow title="Watch Later" Icon={WatchLaterIcon} />
      <SideBarRow title="Liked Video" Icon={ThumpsUpAltOutlinedIcon} />
      <SideBarRow title="Show more" Icon={ExpandMoreOutlinedIcon} />
      <hr />
    </div>
  );
};

export default SideBar;
