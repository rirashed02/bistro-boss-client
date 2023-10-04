import { Link } from "react-router-dom";
import Cover from "../../Shered/Cover/Cover";
import MenuItemCard from "../../Shered/MenuItemCard/MenuItemCard";

const MenuCategories = ({ items, title, img, details }) => {
    return (
        <div className="">
            {title && <Cover img={img} title={title} details={details} ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mb-10 mt-16">
                {
                    items.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 uppercase block mx-auto">Order Your Favorite Food</button> </Link>
        </div>
    );
};

export default MenuCategories;