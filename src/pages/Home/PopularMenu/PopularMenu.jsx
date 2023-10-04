import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItemCard from "../../Shered/MenuItemCard/MenuItemCard";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <section className="mt-10">
            <SectionTitle
                subHeading={'Popular Menu'}
                heading={'From Our'}
            >
            </SectionTitle>

            <div className="md:grid grid-cols-2 gap-10 mt-16 mb-10">
                {
                    popular.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <button className="font-semibold uppercase block mx-auto btn btn-outline border-0 border-b-4">view Full Menu</button>
        </section>
    );
};

export default PopularMenu;