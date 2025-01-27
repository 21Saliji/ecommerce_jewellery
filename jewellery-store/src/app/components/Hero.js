import Image from "next/image";

const Hero = () => {
    return (
    <section classname="relative w-full h-[400px]">
        <Image src="/gold.jpg" alt="gold" layout="fill" objectFit="cover" />
        <div classname="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
            <h2 classname="text-3xl font-serif">Exclusive Handmade Collections</h2>
            <p classname="text-lg">Just For You!</p>
            <button classname="mt-4 px-6 py-2 bg-white text-black rounded-md">Shop Now!</button>
        </div>
    </section>
    );
};

export default Hero;

