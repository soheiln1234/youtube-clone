import { Avatar } from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";
import styles from "./ChannelRow.module.css";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  nuOfVideos,
  description,
}) => {
  return (
    <div className={styles.channelRow}>
      <Avatar className={styles.channelRow__logo} alt={channel} src={image} />
      <div className={styles.channelRow__text}>
        <h4>
          {channel} {verified && <CheckCircleOutline />}
        </h4>
        <p>
          {subs} subscribers . {nuOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
