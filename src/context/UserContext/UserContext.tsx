import { useState, useEffect, createContext } from "react";
import { env } from "../../utils";
import { logo } from "../../assets";
import { UserContextTypes } from "./UserContext.types";

export const UserContext = createContext<UserContextTypes.Context>({
  username: "",
  avatar: "adashfgdjhsa",
  onChangeUsername: () => {},
  onChangeAvatar: () => {},
});

export function UserProvider(props: UserContextTypes.Props) {
  const { children } = props;
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const responseUsername = localStorage.getItem(env.LOCAL_STORAGE.USERNAME);
    setUsername(responseUsername || "Anonimo");

    const responseAvatar = localStorage.getItem(env.LOCAL_STORAGE.AVATAR);
    setAvatar(responseAvatar || logo);
  }, []);

  const onChangeUsername = (username: string) => {
    localStorage.setItem(env.LOCAL_STORAGE.USERNAME, username);
    setUsername(username);
  };

  const onChangeAvatar = (avatar: string) => {
    localStorage.setItem(env.LOCAL_STORAGE.AVATAR, avatar);
    setAvatar(avatar);
  };

  const valueContext: UserContextTypes.Context = {
    username,
    onChangeUsername,
    avatar,
    onChangeAvatar,
  };

  return (
    <UserContext.Provider value={valueContext}>{children}</UserContext.Provider>
  );
}
