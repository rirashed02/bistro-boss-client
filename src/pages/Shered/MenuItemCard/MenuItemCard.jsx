
const MenuItemCard = ({ item }) => {
    console.log(item)
    const { _id, name, recipe, category, price, image } = item;
    return (
        <div className="flex space-x-3">
            <img className="w-[100px]" style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h2 className="uppercase">{name}--------------------</h2>
                <p>{recipe}</p>
            </div>
            <span className="text-yellow-600">${price}</span>
        </div>
    );
};

export default MenuItemCard;