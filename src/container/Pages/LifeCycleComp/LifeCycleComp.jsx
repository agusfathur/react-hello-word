// import { useSelector } from 'react-redux';
import { GlobalConsumer } from '../../../context/context';
import './LifeCycleComp.css';

const LifeCycleComp = (props) => {
  // const reduxState = useSelector(state => state);
  return (
    <>
      <p>Halaman LifeCycle Component</p>
      <hr />
      <button className="btn">Component Button</button>
      <hr />
      {/* Redux State */}
      {/* <p>Total Oder : {reduxState.totalOrder} </p> */}
      <p>Total Oder : {props.state.totalOrder} </p>
    </>
  )
}

export default GlobalConsumer(LifeCycleComp);