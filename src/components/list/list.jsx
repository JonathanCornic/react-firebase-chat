import ChatList from "./chat-list/chat-list";
import "./list.css";
import UserInfo from "./user-info/user-info";

export default function List() {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
}
