import { connect } from 'react-redux';
import './LifeCycleComp.css';

const LifeCycleComp = (props) => {
  return (
    <>
      <p>Halaman LifeCycle Component</p>
      <hr />
      <button className="btn">Component Button</button>
      <hr />
      <p>Total Oder : {props.order} </p>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    order: state.totalOrder
  }
}
export default connect(mapStateToProps)(LifeCycleComp);