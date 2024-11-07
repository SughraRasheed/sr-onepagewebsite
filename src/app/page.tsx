'use client';

export default function Home() {
  return (
    <main> 
      <section className="bg-[url('/images/bg.jpg')] bg-cover bg-no repeat h-screen py-40 lg:w-[1200px] lg:h-[700px]">
      <div className=" flex justify-between"> 
    <div className="md:max-w-screen-md lg:max-w-screen-lg "> 
      <h1 className="mx-28 my-11 text-6xl text-green-800 lg:w-[500px]">Transform Your Space with Green</h1>
      <p className="mx-28 text-xl lg:w-[500px]">

"Discover the beauty and benefits of indoor plants with our curated collection. Transform your space with lush greenery and expert care tips for every plant lover."
      </p>
    </div>
    <div className=" bg-[url('/images/plant.png')] w-400px] h-[400px] lg:w-[450px] lg:h-[600px] bg-cover mx-auto my-auto "></div>
    </div>
      </section>
    </main>
  );
}
