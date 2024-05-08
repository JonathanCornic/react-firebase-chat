import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase/firebase";
import { useUserStore } from "../../../lib/zustand/user-store";
import { useChatStore } from "../../../lib/zustand/chat-store";
import AddUser from "./add-user/add-user";
import "./chat-list.css";

export default function ChatList() {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();
  const { chatId, changeChat } = useChatStore();
  console.log(chatId);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;
        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiveredId);
          const userDocSnap = await getDoc(userDocRef);
          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  async function handleSelect(chat){

    const userChats = chats.map((item) => {
      const {user, ...rest} = item
      return rest
    })

    const chatIndex = userChats.findIndex(item => item.chatId === chat.chatId)
    userChats[chatIndex].isSeen = true

    const userChatsRef = doc(db, "userchats", currentUser.id)

    try {
      await updateDoc(userChatsRef, {
        chats:userChats,
      })
      changeChat(chat.chatId, chat.user)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          className="add"
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      {chats.map((chat) => (
        <div
          className="item"
          key={chat.chatId}
          onClick={() => handleSelect(chat)}
          style={{
            backgroundColor: chat?.isSeen ? "transparent" : "#2aa4a43b",
          }}
        >
          <img src={chat.user.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {addMode && <AddUser />}
    </div>
  );
}
