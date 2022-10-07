function Array() {
  return (
    <>
      <div className="array">
        <div className="banner_head">Array Cheatsheet</div>
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText("Copy this text to clipboard");
          this.innerText = "Copied";
        }}
      >
        Copy
      </button>
    </>
  );
}

export default Array;
