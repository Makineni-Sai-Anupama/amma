import finalPhoto from "../assets/images/final-photo.jpg";

function Letter() {
  return (
    <div className="min-h-screen bg-pink-50 p-8 flex flex-col items-center">

      {/* Letter Section */}
      <div className="max-w-4xl bg-white shadow-2xl rounded-3xl p-12 mb-16">
        <h1 className="text-5xl font-bold text-pink-600 mb-8 text-center">
          A Letter to Amma 💖
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Yoooo Hiii Ammaaa, <br /><br />

          I know I'm the best ani.😏 <br />Chippi annattu you are very cool and chill mummy,
         adding on to that cute kuda. <br />Ofcourse naa antha kaadhu anuko.<br />
          Ante lag cheyyali ani kaadhu kaani nenu koncham bad with words anamata. <br />
          Soo... matter entante...


          <br /><br />

          I LOVE YOUUU.😙😙😙

          <br /><br />

          Happy Mother’s Day Ammaaa❤️🫶
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-2xl mb-16">
        <h2 className="text-4xl font-bold text-pink-600 text-center mb-6">
          A Special Video for You 🎥
        </h2>

        <video
          controls
          className="w-full aspect-video rounded-3xl shadow-2xl object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Final Photo Section */}
      <div className="flex flex-col items-center">
        <img
          src={finalPhoto}
          alt="Final Memory"
          className="w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-pink-300"
        />

        <p className="mt-6 text-3xl text-pink-700 font-semibold text-center">
          From your laddu buddi ❤️
        </p>
      </div>

    </div>
  );
}

export default Letter;