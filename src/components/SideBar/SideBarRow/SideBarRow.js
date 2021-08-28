import styles from "./SideBarRow.module.css";

const SideBarRow = ({ title, Icon, selected }) => {
  return (
    <div className={`${styles.sidebarRow} ${selected && styles.selected} `}>
      <Icon className={styles.sidebarRow__icon} />
      <h2 className={styles.sidebarRow__title}>{title}</h2>
    </div>
  );
};

export default SideBarRow;
