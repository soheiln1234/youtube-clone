import { Avatar } from "@material-ui/core";
import styles from "./VideoCard.module.css";

const VideoCard = ({
  title,
  views,
  channel,
  timestamp,
  image,
  channelImage,
}) => {
  return (
    <div className={styles.videoCard}>
      <img className={styles.videoCard__thupmnail} src={image} alt="" />
      <div className={styles.videoCard__info}>
        <Avatar
          className={styles.videoCard__avatar}
          alt={channel}
          src={channelImage}
        />
        <div className={styles.videoCard__text}>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
