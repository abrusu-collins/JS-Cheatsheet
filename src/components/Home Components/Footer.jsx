function Footer() {
  return (
    <footer className="footer">
      <div className="about">
        <h1>Developed By : Abrusu Collins</h1>
        <div className="about">
          <h1>About</h1>
          <p>
            I created JSCheatsheets to help developers develop faster. It helps
            make <br /> quick references whenever you forget something. It can
            also serve as a quick <br /> revision guide whenever you want to
            revise any JavaScript concept.
          </p>
        </div>
      </div>
      <div className="support">
        <h1>Support</h1>
        <p>
          Do you like JSCheatSheets, <br /> You can support the <br /> project
          to keep it going
        </p>
        <a href="https://patreon.com/abrusucollins?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator">
          {" "}
          Support
        </a>
      </div>

      <div className="contacts">
        <h1>Contacts</h1>
        <a href="https://twitter.com/devSedem">Twitter</a>
        <a href="https://www.linkedin.com/in/abrusu-collins-359a4416a/">
          {" "}
          LinkedIn
        </a>
        <a href="https://github.com/abrusu-collins">GitHub</a>
        <a href="mailto:snillochemingson@gmail.com">Feedback</a>
      </div>
    </footer>
  );
}

export default Footer;
