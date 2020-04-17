const ContactCard = props => (

  <div className="contactCard">
      <style JSX>
    {`
      .contactCard{
        display: flex;
        flex-direction:row;
        padding:12px;
        align-items:center;

      }
      img{
        margin:10px;
        max-width:50px;
        max-height:50px;
      }
      p{
        margin-left:12px;
      }
    `}
  </style>
    <a href={props.href}><img src={props.src}/></a>
    <p>{props.text}</p>
  </div>
);

export default ContactCard;