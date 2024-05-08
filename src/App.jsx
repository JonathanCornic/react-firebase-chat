import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import Chat from "./components/chat/chat";
import Detail from "./components/detail/detail";
import List from "./components/list/list";
import Login from "./components/login/login";
import Notification from "./components/notification/notification";
import { auth } from "./lib/firebase/firebase";
import { useUserStore } from "./lib/zustand/user-store";
import { useChatStore } from "./lib/zustand/chat-store";

export default function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const {chatId} = useChatStore()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;
  
  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
}
