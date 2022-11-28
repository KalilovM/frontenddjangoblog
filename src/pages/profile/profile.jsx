import React from "react";
import { Link } from "react-router-dom";
import { InstanceApi } from "../../services/axios/axios.js";
import styles from "./profile.module.scss";

export function Profile() {
  const [profileData, setProfileData] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState("tab1");
  React.useEffect(() => {
    InstanceApi.get("users/me/").then((res) => {
      setProfileData(res.data);
      console.log(res.data);
    });
  }, []);

  const tabOneHandler = () => {
    setActiveTab("tab1");
  };
  const tabTwoHandler = () => {
    setActiveTab("tab2");
  };

  const tabThreeHandler = () => {
    setActiveTab("tab3");
  };
  return (
    !!profileData && (
      <>
        <div className={styles.wrapper_container}>
          <div className={styles.wrapper}>
            <div className={styles.profile_block}>
              <img
                src={profileData.avatar}
                alt="Avatar"
                width={70}
                height={70}
              />
              <div className={styles.info}>
                <Link>@{profileData.username}</Link>
              </div>
            </div>
          </div>
          <div className={styles.tabs_wrapper}>
            <div className={styles.tabs}>
              <ul className={activeTab === "tab1" ? styles.active : null}>
                <li onClick={tabOneHandler}>Profile</li>
              </ul>
              <ul className={activeTab === "tab2" ? styles.active : null}>
                <li onClick={tabTwoHandler}>Publications</li>
              </ul>
              <ul className={activeTab === "tab3" ? styles.active : null}>
                <li onClick={tabThreeHandler}>Testing</li>
              </ul>
            </div>
            <hr />
          </div>
        </div>
        <div className={styles.wrapper_container}>
          <div className={styles.wrapper}>
            <p className={styles.no_content}>Here is empty</p>
          </div>
        </div>
      </>
    )
  );
}
