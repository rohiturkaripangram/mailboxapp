import { createContext, useState, useEffect } from "react";
import { mails } from "../Db/db";

export const MailContext = createContext();

export const MailContextProvider = ({ children }) => {
  const [serverData, setServerData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [spamData, setSpamData] = useState([]);
  const [trashData, setTrashData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setServerData(mails);
      setOriginalData(mails);
    }, 1000);
  }, []);

  const handleTrash = (element) => {
    setServerData((previousData) =>
      previousData.filter((item) => item !== element)
    );
    setTrashData((previousData) => [...previousData, element]);
  };

  const handleSpam = (element) => {
    setServerData((previousData) =>
      previousData.filter((item) => item !== element)
    );
    setSpamData((previousData) => [...previousData, element]);
  };
  const handleRead = (element) => {
    setServerData((previousData) =>
      previousData.map((item) => {
        if (item === element) {
          return { ...item, unread: false };
        }
        return item;
      })
    );
  };

  

  return (
    <MailContext.Provider
      value={{
        serverData,
        originalData,
        trashData,
        handleTrash,
        spamData,
        handleSpam,
        handleRead,
      }}
    >
      {children}
    </MailContext.Provider>
  );
};
