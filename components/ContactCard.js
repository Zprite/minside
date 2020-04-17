const ContactCard = props => (

  <div className="contactCard">
      <style JSX>
    {`

      .contactCard{
        display: flex;
        flex-direction:row;
        align-items:center;
        padding:18px;

      }
      img{
        margin:4px;
        max-width:50px;
        max-height:50px;
      }
      p{
        margin-left:12px;
      }
      @media screen and (max-width: 800px) {
        .contactCard{
          padding:4px;
        }
      }
    `}
  </style>
    <a href={props.href}><img src={props.src}/></a>
    <p>{props.text}</p>
  </div>
);

export default ContactCard;