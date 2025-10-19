

const Error = () => {
    return (
        <section className="bg-gray-100 w-full h-screen">
            <div className="w-7xl mx-auto ">
            <img src="/image/error/404..png" className="items-center m-auto pt-20"/>
            <div>
                <p className="text-xl text-center">We couldn’t locate this page. Try searching or go back home</p>
                <button className="text-base flex justify-center w-full mt-4 text-violet-800 underline cursor-pointer hover:text-gray-600">Back to Homepage</button>
            </div>
            </div>

        </section>
    );
};

export default Error;