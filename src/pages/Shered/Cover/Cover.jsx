import { Parallax } from 'react-parallax';
const Cover = ({ img, title, details }) => {
    return (

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{details}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;
// <div className="bistro-boss-image bg-fixed" style={{ backgroundImage: `url('${img}')` }}>
//     <div className="max-w-5xl  py-20 mx-auto">
//         <div className='bg-white py-10'>
//             <h1 className='text-center text-4xl mb-5 font-mono'>{tittle}</h1>
//             <div className='w-2/3 mx-auto text-center'>
//                 <p>{details}</p>
//             </div>
//         </div>
//     </div>
// </div>