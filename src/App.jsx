import Chat from "./components/chat/chat";
import Detail from "./components/detail/detail";
import List from "./components/list/list";

export default function App() {
  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}
