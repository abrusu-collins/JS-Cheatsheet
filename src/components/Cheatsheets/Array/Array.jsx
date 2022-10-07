function Array() {
  return (
    <>
      <div className="array">
        <div className="banner_head">Array Cheatsheet</div>

        <div className="declare_array">
          <h2>Array Declaration</h2>
          <div className="code_block">
            <pre>
              <span className="keyword">let</span>{" "}
              <span className="variable_name">array</span>{" "}={" "}
              <span className="punctuation">[</span>{" "}1
              <span className="punctuation">,</span>2
              <span className="punctuation">,</span>3
              <span className="punctuation">,</span>4{" "}
              <span className="punctuation">]</span>;
            </pre>
            <button
              onClick={(e) => {
                navigator.clipboard.writeText("let array = [ 1,2,3,4 ];");
                e.currentTarget.innerText = "Copied";
              }}
            >
              Copy
            </button>
          </div>

          <div className="code_block">
            <pre>
              <span className="keyword">let</span>{" "}
              <span className="variable_name">array</span>{" "}={" "}
              <span className="punctuation">[</span>{" "}1
              <span className="punctuation">,</span>2
              <span className="punctuation">,</span>3
              <span className="punctuation">,</span>4{" "}
              <span className="punctuation">]</span>;
            </pre>
            <button
              onClick={(e) => {
                navigator.clipboard.writeText("let array = [ 1,2,3,4 ];");
                e.currentTarget.innerText = "Copied";
              }}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Array;
