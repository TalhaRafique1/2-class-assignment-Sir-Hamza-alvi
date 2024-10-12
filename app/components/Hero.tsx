const Hero = () => {
    return (
      <section className="bg-gradient-to-r from-red-200 via-red-300 to-red-400 py-20 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg p-12 max-w-3xl text-center border-4 border-red-500 transition-transform transform hover:scale-105 hover:rotate-2">
          <h2 className="text-4xl font-bold text-gray-900">Welcome to the Hero Section</h2>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          Discover exceptional services tailored just for you! Whether you&apos;re looking for top-notch web development or captivating designs, our team is here to bring your vision to life. Let’s create something amazing together!
          </p>
        </div>
      </section>
    );
  };
  
  export default Hero;
  