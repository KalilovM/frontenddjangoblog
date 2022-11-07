import React from "react";
import Avatar from "../../components/avatar/Avatar";
import Course from "../../components/course/Course";
import {request} from "../request/Request";

export default function Profile() {
    const [user, setUser] = React.useState(null)
    // Уточнить можно ли так делать? по 3 запроса на каждом useEffect
    React.useEffect(() => {
        request("http://localhost:8000/api/users/me/",setUser)
    },[])
  return (
    <div>
      <Avatar {...user}/>
      <Course/>
    </div>
  );
}
