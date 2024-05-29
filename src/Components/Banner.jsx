
const Banner = () => {
    return (
        <div>
            <div>
                <div className='bg-[url("https://i.postimg.cc/DZmG1nLk/banner.jpg")] bg-cover bg-no-repeat  bg-right-top h-[580px] '>
                    <h1 className='text-white text-[55px] Rancho pt-36 pl-32 mb-2'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-white pl-32 mb-5'>Its coffee time - Sip & Savor - Relaxation in every sip!
                        Get the nostalgia back!! Yo<span className='md:font-extrabold'>ur</span> <br className='hidden md:block' />companion of every moment!!!
                        Enjoy the beautiful moments and make the<span className='md:font-extrabold'>m memorable.</span></p>
                    <button className='btn Rancho text-2xl text-[#242222] bg-[#E3B577] border-none ml-32'>Learn More</button>
                </div>
                <div className="bg-[#ECEAE3] ">
                    <div className="container mx-auto flex justify-center gap-10 py-14">
                        <div>
                            <img className="mb-3" src="https://i.postimg.cc/YSPfSbyx/1.png" alt="" />
                            <h2 className="Rancho text-4xl mb-2">Awesome Aroma</h2>
                            <p>You will definitely be a fan of the design <br className="hidden md:block"/>& aroma of your coffee</p>
                        </div>
                        <div>
                            <img className="mb-3" src="https://i.postimg.cc/mgbSpcH7/2.png" alt="" />
                            <h2 className="Rancho text-4xl mb-2">High Quality</h2>
                            <p>We served the coffee to you maintaining <br className="hidden md:block"/>the best quality</p>
                        </div>
                        <div>
                            <img className="mb-3" src="https://i.postimg.cc/pLqJw2f4/3.png" alt="" />
                            <h2 className="Rancho text-4xl mb-2">Pure Grades</h2>
                            <p>The coffee is made of the green coffee <br className="hidden md:block"/>beans which you will love</p>
                        </div>
                        <div>
                            <img className="mb-3" src="https://i.postimg.cc/MGHmxhtT/4.png" alt="" />
                            <h2 className="Rancho text-4xl mb-2">Proper Roasting</h2>
                            <p>Your coffee is brewed by first roasting <br className="hidden md:block"/>the green coffee beans</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;