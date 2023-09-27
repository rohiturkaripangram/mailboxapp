import "./Spam.css";
import { useContext } from "react";
import { MailContext } from "../../index";
export const Spam = () => {
  const { spamData } = useContext(MailContext);
  return (
    <div className="main">
      <div className="Filter">
        <label>
          <input type="checkbox" /> Show unread mails
        </label>
        <label>
          <input type="checkbox" /> Show read mails
        </label>
      </div>
      <h3 className="spam">Spam:{spamData.length}</h3>
      <div className="mail-inbox">
        {spamData.map((element) => (
          <li className="mail-list" key={element.mid}>
            <h3>Subject:{element.subject}</h3>
            <span className="star">Star</span>
            <p>{element.content}</p>
            <span>View Details</span>
           
          </li>
        ))}
      </div>
    </div>
  );
};
