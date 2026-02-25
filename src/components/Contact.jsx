
let contacts = [
  
    { type: "Email", value: "mailto:abubakarmustapham10@gmail.com", display: "abubakarmustapham10@gmail.com" },
    { type: "GitHub", value: "https://github.com/Mustyab", display: "Mustyab" }
  
];

function Contact() {
  return (
    <section id="contact">
        <div className="container">
            <h1>Let's Connect</h1>
            <p>Got a project idea or just want to say hi? Reach me here:</p>
            <div className="contact-links">
                  {contacts.map((contact) => {
                    return (
                      <div className="contact-content" key={contact.type}>
                        <h1>{contact.type}</h1>
                        <a href={contact.value} rel="noopener noreferrer">
                          {contact.display}
                        </a>
                    </div>
            );
          })}
        </div>
        </div>
      
    </section>
  )
}

export default Contact
