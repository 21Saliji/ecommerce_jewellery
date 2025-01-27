const Collections = () => {
    return (
        <section classname="py-10 text-center">
            <h3 classname="text-2x1 font-semibold">Valentine's Collection</h3>
            <div classname="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} classname="bg-gray-300 w-32 h-32 flex items-center justify-center">items</div>
              ))}
            </div>
        </section>
    );
};

export default Collections;

