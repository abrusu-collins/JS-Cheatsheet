import { useState } from "react";

function Array() {
  let [buttonText, setButtonText] = useState("Copy");
  return (
    <>
      <div className="array">
        <div className="banner_head">Array Cheatsheet</div>

        <div className="declare_array">
          <h2>Array Declaration</h2>
          <div className="code_block">
            <pre>
              <span className="keyword">let</span>{" "}
              <span className="variable_name">array</span> ={" "}
              <span className="punctuation">[</span> 1
              <span className="punctuation">,</span>2
              <span className="punctuation">,</span>3
              <span className="punctuation">,</span>4{" "}
              <span className="punctuation">]</span>{" "}
              <span className="punctuation">;</span>
            </pre>
            <button
              onClick={(e) => {
                navigator.clipboard.writeText("let array = [ 1,2,3,4 ];");
                setButtonText("Copied");
                setTimeout(()=>{setButtonText("Copy")},2000);
              }}
            >
              {buttonText}
            </button>
          </div>

          <div className="code_block">
            <pre>
              {" "}
              <span className="keyword">let</span>{" "}
              <span className="variable_name">array</span> ={" "}
              <span className="keyword">new</span>{" "}
              <span className="keyword">Array</span>{" "}
              <span className="punctuation">(</span> 1
              <span className="punctuation">,</span>2
              <span className="punctuation">,</span>3{" "}
              <span className="punctuation">)</span>{" "}
              <span className="punctuation">;</span>
            </pre>
            <button
              onClick={(e) => {
                navigator.clipboard.writeText(
                  "let array = new Array( 1,2,3 );"
                );
                setButtonText("Copied");
                setTimeout(()=>{setButtonText("Copy")},2000);
              }}
            >
              {buttonText}
            </button>
          </div>
          <h2 className="top_marginator">Accessing Array Elements</h2>
          <p>
            We access elements/members of an array using their index. Indices
            start from 0(the first member), 1(the second member), 2, 3,...,
            n(last member).
          </p>
          <div className="code_block">
            <pre>
              console.log(array[0]); //returns the first element
              <br />
              <br />
              console.log(array[1]); //returns the second element
              <br />
              <br />
              console.log(array[2]); //returns the third element
            </pre>

            <button
              onClick={(e) => {
                navigator.clipboard.writeText("console.log(array[0])");
                setButtonText("Copied");
                setTimeout(()=>{setButtonText("Copy")},2000);
              }}
            >
              {buttonText}
            </button>
          </div>
          <h2 className="top_marginator">Adding Elements to an Array</h2>
        </div>
      </div>
    </>
  );
}

export default Array;
