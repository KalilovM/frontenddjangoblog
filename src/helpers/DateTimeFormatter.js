export const DateTimeFormatter = (datetime) => {
  const postDate = new Date(datetime);
  const postDateMonth = postDate.getMonth();
  const postDateDay = postDate.getDay();
  const today = new Date(Date.now());
  const todayMonth = today.getMonth();
  const todayDay = today.getDay();
  const diffMonth = todayMonth - postDateMonth;
  const diffDay = todayDay - postDateDay;

  if (diffMonth === 0 && diffDay < 1) {
    console.log("work");
    return `Today at ${postDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else if (diffMonth === 0 && 1 < diffDay < 2) {
    return `Yesterday at ${postDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else {
    return postDate.toLocaleDateString();
  }
};
