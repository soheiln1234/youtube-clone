import styles from "./SearchPage.module.css";

import ChannelRow from "./ChannelRow/ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./VideoRow/VideoRow";

const SearchPage = () => {
  return (
    <div className={styles.searchPage}>
      <div className={styles.searchPage__filter}>
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        channel="Soheil Nikroo"
        verified
        subs="659k"
        nuOfVideos="382"
        description="You can find awesome programming videos on my channel."
      />
      <hr />
      <VideoRow
        title="Hello Bitches!!"
        views="2.3M Views"
        subs="660k"
        timestamp="3 days ago"
        channel="Soheil Nikroo"
        description="Hello how are you bitches???!!"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksRpjIebIuwp6KS7B6JX2v5ivInQUcD3n0g&usqp=CAU"
      />
      <VideoRow
        title="Hello Bitches!!"
        views="2.3M Views"
        subs="660k"
        timestamp="3 days ago"
        channel="Soheil Nikroo"
        description="Hello how are you bitches???!!"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksRpjIebIuwp6KS7B6JX2v5ivInQUcD3n0g&usqp=CAU"
      />
      <VideoRow
        title="Hello Bitches!!"
        views="2.3M Views"
        subs="660k"
        timestamp="3 days ago"
        channel="Soheil Nikroo"
        description="Hello how are you bitches???!!"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksRpjIebIuwp6KS7B6JX2v5ivInQUcD3n0g&usqp=CAU"
      />
      <VideoRow
        title="Hello Bitches!!"
        views="2.3M Views"
        subs="660k"
        timestamp="3 days ago"
        channel="Soheil Nikroo"
        description="Hello how are you bitches???!!"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksRpjIebIuwp6KS7B6JX2v5ivInQUcD3n0g&usqp=CAU"
      />
      <VideoRow
        title="Hello Bitches!!"
        views="2.3M Views"
        subs="660k"
        timestamp="3 days ago"
        channel="Soheil Nikroo"
        description="Hello how are you bitches???!!"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksRpjIebIuwp6KS7B6JX2v5ivInQUcD3n0g&usqp=CAU"
      />
      <VideoRow
        title="Hello Bitches!!"
        views="2.3M Views"
        subs="660k"
        timestamp="3 days ago"
        channel="Soheil Nikroo"
        description="Hello how are you bitches???!!"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksRpjIebIuwp6KS7B6JX2v5ivInQUcD3n0g&usqp=CAU"
      />
    </div>
  );
};

export default SearchPage;
