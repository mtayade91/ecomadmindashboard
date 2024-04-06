import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, Location, useLocation, } from "react-router-dom";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import { FaChartBar, FaChartLine, FaChartPie, FaStopwatch, FaThumbsUp,} from "react-icons/fa";
import { BiSolidCoupon } from "react-icons/bi";
import logo from "/assets/Logo.png";


const AdminSidebar = () => {
const location = useLocation();
 
    return (
    <aside>
        <img src={logo} alt="Logo" width="200px"/>
        <DivOne location={location}/>
        <DivTwo location={location}/>
        <DivThree location={location}/>
    </aside>
  )
}
const DivOne=({location}:{location:Location})=>(
    <div>
    <h5>Dashboard</h5>
    <ul>
        <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location}/>
        <Li url="/admin/products" text="All Product" Icon={RiShoppingBag3Fill} location={location}/>
        <Li url="/admin/customers" text="Customers" Icon={IoIosPeople} location={location}/>
        <Li url="/admin/transaction" text="Transactions" Icon={AiFillFileText} location={location}/>
    </ul>
</div>
)
const DivTwo=({location}:{location:Location})=>(
    <div>
    <h5>Charts</h5>
    <ul>
        <Li url="/admin/chart/bar" text="Bar" Icon={FaChartBar} location={location}/>
        <Li url="/admin/chart/pie" text="Pie" Icon={FaChartPie} location={location}/>
        <Li url="/admin/chart/line" text="Line" Icon={FaChartLine} location={location}/>
    </ul>
</div>
)
const DivThree=({location}:{location:Location})=>(
    <div>
    <h5>Tools</h5>
    <ul>
        <Li url="/admin/apps/coupon" text="Coupon" Icon={BiSolidCoupon} location={location}/>
        <Li url="/admin/apps/stopwatch" text="Stop Watch" Icon={FaStopwatch} location={location}/>
        <Li url="/admin/apps/toss" text="Toss" Icon={FaThumbsUp} location={location}/>
    </ul>
</div>
)
interface LiProps{
    url:string, text:string,location:Location, Icon:IconType
}
const Li=({url,text,location,Icon}:LiProps)=>(
    <li style={
        {
            backgroundColor:location.pathname.includes(url) ?"rgba(0,115,255,0.1)":"white",
        }
    }>
        <Link to={url} style={{color:location.pathname.includes(url)?"rgba(0,115,255)":"black"}}>
            <Icon/>
            {text}
        </Link>
    </li>

)

export default AdminSidebar