// import { useSelector } from 'react-redux';
import { RootContext } from '../../Home/Home';
import './LifeCycleComp.css';

const LifeCycleComp = (props) => {
  // const reduxState = useSelector(state => state);
  return (
    <RootContext.Consumer>
      {
        value => {
          return (
            <>
              <p>Halaman LifeCycle Component</p>
              <hr />
              <button className="btn">Component Button</button>
              <hr />
              {/* Redux State */}
              {/* <p>Total Oder : {reduxState.totalOrder} </p> */}
              <p>Total Oder : {value.state.totalOrder} </p>
            </>
          )
        }
      }
    </RootContext.Consumer>
  )
}

export default LifeCycleComp;