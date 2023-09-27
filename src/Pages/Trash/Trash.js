import {useContext} from "react"
import {MailContext} from "../../index"
export const Trash=()=>{
    const {trashData}=useContext(MailContext)
    return(
        <div className="main">
        <div className="Filter">
          <label>
            <input type="checkbox" /> Show unread mails
          </label>
          <label>
            <input type="checkbox" /> Show read mails
          </label>
        </div>
        <h3 className="trash">Trash:{trashData.length}</h3>
        <div className="mail-inbox">
          {
            trashData.map(element=><li className="mail-list" key={element.mid}>
              <h3>Subject:{element.subject}</h3>
              <span className="star">Star</span>
              <p>{element.content}</p>
              <span>View Details</span>
            
            </li>)
          }
          
         
        </div>
      </div>
    )
}