export default function ComingSoon() {
  let launchDate = new Date("July 18, 2022 12:00:00").getTime();

  // Setup Timer to tick every 1 second
  let timer = setInterval(tick, 1000);

  function tick() {
    // Get current time
    let now = new Date().getTime();

    // Get the difference in time to get time left until reaches 0
    let t = launchDate - now;

    // Check if time is above 0
    if (t > 0) {
      // setup Days, Hours, Seconds and minutes

      // prefix any number below 10 with a "0" E.g 1 = 01

      let days = Math.floor(t / (1000 * 60 * 60 * 24));

      // Algorithm to calculate Days
      if (days < 10) {
        days = "0" + days;
      }

      // Algorithm to calculate hours

      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      if (hours < 10) {
        hours = "0" + hours;
      }

      // Algorithm to calculate Minutes;

      let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      // Algorithm to calculate Seconds;

      let seconds = Math.floor((t % (1000 * 60)) / 1000);

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      //  Create Time String
      let time = `${days}
              : ${hours} : ${minutes} : ${seconds}`;

      // Set time on document
      document.getElementById("countdown").innerHTML = time;
    }
  }

  return (
    <div className=" h-screen bg-black pt-20 flex items-center justify-center">
      <div className="max-w-xl mx-auto text-center px-6">
        <h1 className="coming-soon text-4xl md:text-7xl">Coming Soon</h1>
        <p className="py-4 text-neutral-400">
          WhoScore? is a Livescore and Streaming service with a Global Community
          of Sport Enthusiasts.
        </p>

        <div className="text-white text-2xl mb-6">
          <h4 id="countdown"></h4>
        </div>
        <div className="relative px-3 md:px-10">
          <input
            type="text"
            placeholder="Enter email address"
            className="relative bg-neutral-800 pl-3 text-sm text-neutral-200 h-14 md:h-14  w-full rounded-sm"
          />
          <button className="bg-white rounded-sm px-3 py-2 absolute top-2 right-4 md:right-12 text-sm transform transition hover:-translate-x-1 tracking-wider">
            Notify Me
          </button>

          <span className="block mt-4 text-neutral-500 text-sm">
            -_Notify me when Feature is Launched -_
          </span>
        </div>
      </div>
    </div>
  );
}
