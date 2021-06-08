import { React } from "react";
import user from "../images/user.jpg";

const ContactList = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img
        style={{
          widows: "30px",
          height: "30px",
          borderRadius: "50%",
          float: "left",
        }}
        src={user}
        alt="user"
      />
      <div className="contact">
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>
          <i
            className="trash alternate outline icon"
            style={{
              color: "red",
              marginTop: "7px",
              marginBottom: "10px",
              float: "right",
              cursor: "pointer",
            }}
            onClick={(e) => props.getCardIdForContact(id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
