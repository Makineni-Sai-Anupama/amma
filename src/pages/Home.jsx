import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-100 text-center">
      <h1 className="text-6xl font-bold text-pink-600 mb-4">
        Happy Mother’s Day ❤️
      </h1>

     

      <Link
        to="/memories"
        className="px-8 py-4 bg-pink-500 text-white rounded-full text-xl hover:bg-pink-600 transition"
      >
        Begin Journey
      </Link>
    </div>
  );
}

export default Home;