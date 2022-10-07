function Array() {
  return (
    <>
      <div className="array">
        <h1>Array Declaration</h1>
        <div className="banner_head">Array Cheatsheet</div>
      </div>
      <div className="declare_array">
        <button
          onClick={() => {
            navigator.clipboard.writeText("Copy this text to clipboard");
            this.innerText = "Copied";
          }}
        >
          Copy
        </button>
      </div>
    </>
  );
}

export default Array;
