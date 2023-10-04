import { Helmet } from "react-helmet-async";
import Cover from "../../Shered/Cover/Cover";
import banner3 from '../../../assets/menu/banner3.jpg'
import dessert from '../../../assets/menu/dessert.jpeg'
import pizzaImg from '../../../assets/menu/pizza.jpg'
import soupImg from '../../../assets/menu/soup.jpg'
import saladImg from '../../../assets/menu/salad.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategories from "../MenuCategories/MenuCategories";
const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div>
                <Cover img={banner3} tittle={'OUR MENU'} details='Would You Like To Try a Dish?'></Cover>
            </div>

            {/* today's offer */}
            <div className="my-16">
                <div className="my-10">
                    <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offered"} ></SectionTitle>
                </div>
                <MenuCategories items={offered} ></MenuCategories>
            </div>
            {/* salads menu items */}
            <div className="my-16">
                <MenuCategories items={salad} img={saladImg} title={'salad'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuCategories>
            </div>
            {/* Pizza menu items */}
            <div className="my-16">
                <MenuCategories items={pizza} img={pizzaImg} title={'pizza'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuCategories>
            </div>
            {/* desserts menu items */}
            <div className="my-16">
                <MenuCategories items={desserts} img={dessert} title={'dessert'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuCategories>
            </div>
            {/* Soups menu items */}
            <div className="my-16">
                <MenuCategories items={soups} img={soupImg} title={'soups'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuCategories>
            </div>
            <div className="my-16">
                <MenuCategories items={drinks} img={soupImg} title={'drinks'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuCategories>
            </div>

        </div>
    );
};

export default Menu;