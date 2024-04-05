import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';


const Dashboard = lazy(()=>import('./pages/Dashboard'));
const Products =lazy(()=>import('./pages/Products'));
const Transaction = lazy(()=>import('./pages/Transaction'));
const Customers =lazy(()=>import('./pages/Customers'));
const BarCharts =lazy(()=>import('./pages/charts/BarCharts'));
const LineCharts =lazy(()=>import('./pages/charts/LineCharts'));
const PieCharts =lazy(()=>import('./pages/charts/PieCharts'));
const Coupon = lazy(()=>import('./pages/apps/Coupon'));
const Toss = lazy(()=>import('./pages/apps/Toss'));
const StopWatch = lazy(()=>import('./pages/apps/StopWatch'));






const App = () => {
  return <Router>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
      <Route path="/admin/products" element={<Products/>}/>
      <Route path="/admin/transaction" element={<Transaction/>}/>
      <Route path="/admin/customers" element={<Customers/>}/>

      {/**Charts */}
      <Route path="/admin/chart/bar" element={<BarCharts/>}/>
      <Route path="/admin/chart/line" element={<LineCharts/>}/>
      <Route path="/admin/chart/pie" element={<PieCharts/>}/>
      {/**Apps */}
      <Route path="/admin/apps/coupon" element={<Coupon/>}/>
      <Route path="/admin/apps/toss" element={<Toss/>}/>
      <Route path="/admin/apps/stopwatch" element={<StopWatch/>}/>
    </Routes>
    </Suspense>

  </Router>
}

export default App