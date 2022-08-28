import markimg from "../../img/mark.jfif";
import farhanimg from "../../img/farhan.jfif";
import adamimg from "../../img/adam.jfif";
import fredricaimg from "../../img/fredrica.jfif";

function Testimonies() {
  return (
    <div className="testimonies">
      <h1 className="testimoniesheader">
        What Other <br /> Developers <br /> are saying
      </h1>

      <div className="flex4">
        <div className="flex2">
          <div className="testimonial1">
            <div className="maintestimony">
              I had 3 days to prepare for an interview so I needed a summary of
              some basic JavaScript concepts. I came across JSCeatsheets by
              chance and it helped me a lot.
            </div>
            <div className="profile">
              <img src={fredricaimg} alt="fredrica img" className="image"></img>
              <p>Fredrica Arthur</p>
            </div>
          </div>

          <div className="testimonial2">
            <div className="maintestimony">
              How on earth is this free, it feels illegal to know this site. I
              recommend these cheatsheets for every JavaScript developer.
            </div>
            <div className="profile">
              <img src={farhanimg} alt="farhan img" className="image"></img>
              <p>yahaya farhan</p>
            </div>
          </div>
        </div>

        <div className="flex2">
          <div className="testimonial1">
            <div className="maintestimony">
              I've downloaded all the cheatsheets so that I can be using them
              offline. JSCheatsheets reduces the stress of searching things on
              the internet everyday.
            </div>
            <div className="profile">
              <img src={adamimg} alt="adam img" className="image"></img>
              <p>adam labaran </p>
            </div>
          </div>

          <div className="testimonial2">
            <div className="maintestimony">
              I am a python developer, recently at my work place I was given
              some simple task to implement with JavaScript. After an intensive
              research, I found JSCheasheets. God bless the creator of this
              wonderful site.
            </div>
            <div className="profile">
              <img src={markimg} alt="mark img" className="image"></img>
              <p>mark owusu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
