function RecentCheatsheets() {
  return (
    <div className="recentcheatsheets">
      <h1 className="recentcheatsheetsheading">
        RECENT <br />
        CHEATSHEETS
      </h1>
      <div className="recentcheatsheets1">
        <a href="/array">Array Cheatsheet</a>
        <a href="/string">String Cheatsheet</a>
        <a href="/regexp">RegExp Cheatsheet</a>
      </div>
      <div className="recentcheatsheets2">
        <a href="/dom">DOM Cheatsheet</a>
        <a href="/api">API Calls Cheatsheet</a>
        <a className="allcheatsheets" href="/allcheatsheets">
          All Cheatsheets
        </a>
      </div>
    </div>
  );
}

export default RecentCheatsheets;
