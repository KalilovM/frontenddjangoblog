import React from "react";
import Avatar from "../../components/avatar/Avatar";
import Course from "../../components/course/Course";
import axios from "axios";

export default function Profile() {
    const [user, setUser] = React.useState(null)
    // Уточнить можно ли так делать? по 3 запроса на каждом useEffect
    React.useEffect(() => {
        axios.get("http://localhost:8000/api/users/me/").then((res) => {
            setUser(res.data)
        })
    },[])
  return (
    <div>
      <Avatar {...user}/>
      <Course/>
    </div>
  );
}
