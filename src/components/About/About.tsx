import Abt from '../../assets/welcome.png';

const About = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-[200px] md:min-h-[400px] lg:min-h-[500px] flex items-center"
      style={{
        backgroundImage: `url(${Abt})`,
      }}
    >
      {/* Optional overlay for text readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Text content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 text-left">
        <p className="text-xs sm:text-sm text-black uppercase font-medium mb-2">
          About Us
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black max-w-md leading-snug">
          Serving the World Around Us
        </h1>
      </div>
    </section>
  );
};


export default About;
