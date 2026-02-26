
let contacts = [
  { type: "Email", value: "mailto:abubakarmustapham10@gmail.com", display: "abubakarmustapham10@gmail.com" },
  { type: "GitHub", value: "https://github.com/Mustyab", display: "github.com/Mustyab" }
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let&apos;s Connect</h2>
        <p>Got a project idea or just want to say hi? Reach me here:</p>

        <div className="contact-links">
          {contacts.map((contact) => (
            <div className="contact-content" key={contact.type}>
              <h3>{contact.type}</h3>
              <a href={contact.value} target="_blank" rel="noopener noreferrer">
                {contact.display}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;

