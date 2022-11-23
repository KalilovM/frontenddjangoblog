import React from "react";
import { InstanceApi } from "../../services/axios/axios.js";
import styles from "./profile.module.scss";

export function Profile() {
  const [profileData, setProfileData] = React.useState(null);
  React.useEffect(() => {
    console.log("effected");
    InstanceApi.get("users/me/").then((res) => {
      setProfileData(res.data);
      // console.log(res.data);
    });
  }, []);
  return (
    !!profileData && (
      <div className={styles.wrapper}>
        <div className={styles.profile_block}>
          <img src={profileData.avatar} alt="Avatar" />
          <div className={styles.info}>
            <h3>{profileData.first_name}</h3>
          </div>
        </div>
      </div>
    )
  );
}
