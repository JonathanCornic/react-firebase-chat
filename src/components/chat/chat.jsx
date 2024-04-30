import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import "./chat.css";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  function handleEmoji(e) {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  }

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              saepe suscipit, tenetur adipisci corporis minima atque
              reprehenderit voluptatem deleniti veniam voluptatum velit debitis
              sit nam cupiditate mollitia pariatur ad, et optio soluta dicta.
              Rem facilis ut cum in mollitia voluptas.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              saepe suscipit, tenetur adipisci corporis minima atque
              reprehenderit voluptatem deleniti veniam voluptatum velit debitis
              sit nam cupiditate mollitia pariatur ad, et optio soluta dicta.
              Rem facilis ut cum in mollitia voluptas.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              saepe suscipit, tenetur adipisci corporis minima atque
              reprehenderit voluptatem deleniti veniam voluptatum velit debitis
              sit nam cupiditate mollitia pariatur ad, et optio soluta dicta.
              Rem facilis ut cum in mollitia voluptas.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              saepe suscipit, tenetur adipisci corporis minima atque
              reprehenderit voluptatem deleniti veniam voluptatum velit debitis
              sit nam cupiditate mollitia pariatur ad, et optio soluta dicta.
              Rem facilis ut cum in mollitia voluptas.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/8364804/pexels-photo-8364804.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              saepe suscipit, tenetur adipisci corporis minima atque
              reprehenderit voluptatem deleniti veniam voluptatum velit debitis
              sit nam cupiditate mollitia pariatur ad, et optio soluta dicta.
              Rem facilis ut cum in mollitia voluptas.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/8364804/pexels-photo-8364804.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              saepe suscipit, tenetur adipisci corporis minima atque
              reprehenderit voluptatem deleniti veniam voluptatum velit debitis
              sit nam cupiditate mollitia pariatur ad, et optio soluta dicta.
              Rem facilis ut cum in mollitia voluptas.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker
              open={open}
              emojiStyle={"native"}
              onEmojiClick={handleEmoji}
              className="emojiPicker"
            />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}