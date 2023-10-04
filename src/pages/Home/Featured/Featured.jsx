import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured_item bg-fixed my-32 text-white">
            <div className="pt-16 bg-[#151515B2] bg-opacity-10">
                <SectionTitle subHeading={'Check it Out'} heading={'Featured item'} ></SectionTitle>
            </div>
            <div className="flex justify-between items-center bg-[#151515B2] bg-opacity-100 px-24 pt-10 pb-20">
                <div className="">
                    <img className="" src={featured} alt="" />
                </div>
                <div className="md:ml-10 space-y-3">
                    <span>April 25, 2027</span>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime teneturLorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere..</p>
                    <button className="btn btn-outline text-white border-0 border-b-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;