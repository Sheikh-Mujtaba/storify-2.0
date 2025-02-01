import pull from '../assets/pull.jpg';
import pull2 from '../assets/pull2.png';
import pull3 from '../assets/pull3.png';



const Home : React.FC =()=>{
    return <>
    <div className="h-[90vh] px-[5vw]   "  >
        <div className='h-[100%] rounded-4xl flex justify-center items-center'  style={{ backgroundImage: `url(${pull})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

           <button className='px-[1.7rem] py-[0.7rem] text-white bg-black/50  rounded-4xl cursor-pointer'>New in</button>

        </div>

    </div>

    <div className="h-[100vh] px-[5vw] py-[4vh] "  >
        <div className='h-[100%] rounded-4xl flex justify-center items-center'  style={{ backgroundImage: `url(${pull2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

           <button className='px-[1.7rem] py-[0.7rem] text-white bg-black/50  rounded-4xl cursor-pointer'>Shop Now</button>

        </div>

    </div>

    <div className="h-[100vh] px-[5vw] py-[4vh] "  >
        <div className='h-[100%] rounded-4xl flex justify-center items-center'  style={{ backgroundImage: `url(${pull3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

           <button className='px-[1.7rem] py-[0.7rem] text-white bg-black/50  rounded-4xl cursor-pointer'>Store</button>

        </div>

    </div>
    </>
}
export default Home;