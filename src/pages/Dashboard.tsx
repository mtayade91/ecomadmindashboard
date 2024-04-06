import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";



const dashboard = () => {
  return (
    <div className="admin-container">
      {/**SideBar */}
      <AdminSidebar></AdminSidebar>
      {/**Main */}
      <main className="dashboard">
        <div className="bar">
        <BsSearch/>
        <input type="text"placeholder="Search for Data, Users & Docs" />
        <FaRegBell/>
        <img src={userImg} alt="User" />
        </div>

        <section className="widget-container">
          <WidgetItem percent={40} amount={true} value={34000} heading="Revenue" color="rgb(0,115,255)"/>
          <WidgetItem percent={-14} value={400} heading="Users" color="rgb(0,198,202)"/>
          <WidgetItem percent={80}  value={23000} heading="Transactions" color="rgb(2,196,0)"/>
          <WidgetItem percent={30}  value={1000} heading="Products" color="rgb(76,0,255)"/>
        </section>

        <section className="graph-container">


        </section>
      
      
      
      </main>
    </div>
  );
};


interface WidgetItemProps{
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?:boolean;

}
const WidgetItem=({heading, value, percent,color,amount=false}:WidgetItemProps)=>
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount? `$${value}`:value}</h4>
      {
        percent>0? (<span className="green"><HiTrendingUp/> + {percent}%{""}</span>):(<span className="red"><HiTrendingDown/> {percent}%{""}</span>)
      }
    </div>
    <div className="widget-circle" style={{
      background:`conic-gradient(
        ${color} ${Math.abs(percent)/100 * 360}deg,
        rgb(255,255,255) 0
      )`
    }}>
      <span style={{
        color,
      }}>{percent}%</span>
    </div>
  </article>;

export default dashboard