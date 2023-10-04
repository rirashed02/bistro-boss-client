const FoodCard = ({ item }) => {
    const { name, price, image, recipe   } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-5 mt-4 px-3 py-2">${price}</p>
            <div className="card-body text-center">
                <h2 className=" text-2xl font-semibold text-center">{name}</h2>
                <p className="text-[#737373]">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] hover:text-[#BB8506] hover:border-b-[#BB8506] px-10 ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;