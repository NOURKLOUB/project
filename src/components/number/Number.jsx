/* eslint-disable react/prop-types */
import './Number.css'
import { useSpring , animated } from 'react-spring'
function Buting({n}) {
    const {number} = useSpring({
        from:{number:0},
        number:n,
        delay:100,
        config:{mass:1,tension:4,friction:1},        
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}
export default function Number() {
  return (
    <main>
      <div className='police'>
       <i className="bi bi-tv"></i>
         <div className="">
            <span style={{display:'flex', gap:'5px'}}><Buting n={100}/>W</span>
            <h6>online courses</h6>
         </div>
      </div>
      <div className='titles'>
      <i className="bi bi-person-fill-check"></i>
         <div className="">
         <span style={{display:'flex', gap:'5px'}}><Buting n={200}/>L</span>
            <h6>expert tutors</h6>
         </div>
      </div>
      <div className='foces'>
      <i className="bi bi-spotify"></i>
         <div className="">
         <span style={{display:'flex', gap:'5px'}}><Buting n={300}/>+</span>
            <h6>online students</h6>
         </div>
      </div>
      <div className='fiden'>
      <i className="bi bi-patch-check-fill"></i>
         <div className="">
         <span style={{display:'flex', gap:'5px'}}><Buting n={400}/>K</span>
            <h6>certified courses</h6>
         </div>
      </div>
    </main>
  )
}
