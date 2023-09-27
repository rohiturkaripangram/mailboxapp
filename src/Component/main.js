import "./main.css";
import {useContext} from "react"
import {MailContext} from "../index"
export const Main = () => {
    const {serverData,handleTrash,handleSpam,handleRead}=useContext(MailContext)
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
      <h3 className="unread">UnRead:{serverData.filter(element=>element.unread===true).length}</h3>
      <h3 className="unread">TotalMail:{serverData.length}</h3>
      <div className="mail-inbox">
        {
          serverData.map(element=><li className="mail-list" key={element.mid}>
            <h3>Subject:{element.subject}</h3>
            <span className="star">Star</span>
            <p>{element.content}</p>
            <span>View Details</span>
            <div className="buttons">
                <button onClick={()=>handleTrash(element)} >Delete</button>
                <button onClick={()=>handleRead(element)}>Mark as Read</button>
                <button onClick={()=>handleSpam(element)}>Report spam</button>
            </div>
          </li>)
        }
        
       
      </div>
    </div>
  );
};
