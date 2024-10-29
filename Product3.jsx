import starfighterImage from '../assets/starfighter.jpg';

const StarfighterSection = () => {
  return (
    <section className="w-full h-[50vh] flex">
      {/* Left Side - Text */}
      <div className="w-1/2 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div>
          <p className="text-red-600 font-mono uppercase tracking-wider mb-4">
            Introducing
          </p>
          <h2 className="text-4xl font-bold font-mono text-gray-800 mb-6">
            The Starfighter
          </h2>
          <p className="text-lg text-gray-600 mb-6 font-mono">
            The F-104 ‘Starfighter’ was developed in the 50s to be the fastest
            and highest flying interceptor aircraft. It reached immense Mach 2
            speeds with its radical streamlined design.
          </p>
          <a
            href="#"
            className="text-red-600 font-mono hover:underline text-lg transition duration-300"
          >
            Shop The Starfighter
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 h-full">
        <img
          src={starfighterImage}
          alt="Starfighter Watch"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default StarfighterSection;
