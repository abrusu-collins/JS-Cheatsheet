function Array() {
  return (
    <>
      <div className="array">
        <div className="banner_head">Array Cheatsheet</div>
      
      <div className="declare_array">
      <h2>Array Declaration</h2>
        <button
          onClick={() => {
            navigator.clipboard.writeText("Copy this text to clipboard");
            this.innerText = "Copied";
          }}
        >
          Copy
        </button>
      </div>
      </div>
    </>
  );
}

export default Array;
