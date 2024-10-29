import philosophyImage from '../assets/philosophy.jpg';

const PhilosophySection = () => {
  return (
    <section className="w-full h-[50vh] flex">
      {/* Left Side - Image */}
      <div className="w-1/2 h-full">
        <img
          src={philosophyImage}
          alt="Zelos Philosophy Watch"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-1/2 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div>
          <p className="text-red-600 font-mono uppercase tracking-wider mb-4">
            Our Story
          </p>
          <h2 className="text-4xl font-bold font-mono text-gray-800 mb-6">
            The Zelos Philosophy
          </h2>
          <p className="text-lg text-gray-600 mb-6 font-mono">
            At Zelos, we draw inspiration from the rarest places. From miles
            beneath the sea, or above the clouds. From prized ancient materials
            and modern alloys. Or sometimes, even from outer space.
          </p>
          <a
            href="#"
            className="text-red-600 font-mono hover:underline text-lg transition duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
