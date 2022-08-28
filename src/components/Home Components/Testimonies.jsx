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
              <div className="image"></div>
              <p>Kenneth Marfo</p>
            </div>
          </div>

          <div className="testimonial2">
            <div className="maintestimony">
              How on earth is this free, it feels illegal to know this site. I
              recommend these cheatsheets for every JavaScript developer.
            </div>
            <div className="profile">
              <img src= alt="farhan img" className="image"></img>
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
              <div className="image"></div>
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
              <div className="image"></div>
              <p>mark owusu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
