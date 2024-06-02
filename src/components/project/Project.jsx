import { useState } from 'react'
import './Project.css'
import { product } from './Product'
export default function Project() {
  const [active , setActive] = useState('all')
  const [groub,setGroub] = useState(product)
  
  return (
    <div>
        <div className="fogmi">
            <h1>Most Popular Courses</h1>
            <p>Choose from hundreds of courses from specialist organizations</p>
        </div>
        <div className="buttonsing">
            <button onClick={() => {setActive('all') 
            const groub = product.filter(item => item.catrgyre === 'Figma')
            setGroub(groub)
            }} className={active === 'all' ? 'active' : null}>Web Design</button>
            <button onClick={() => {setActive('Graphic')
            const groub = product.filter(item => item.catrgyre === 'Invision')
            setGroub(groub)
            }} className={active === 'Graphic' ? 'active' : null}>Development</button>
            <button onClick={() => {setActive('python')
            const groub = product.filter(item => item.catrgyre === 'React-Native')
            setGroub(groub)
            }} className={active === 'python' ? 'active' : null}>Graphic Design</button>
            <button onClick={() => {setActive('Angular')
            const groub = product.filter(item => item.catrgyre === 'PHP')
            setGroub(groub)
            }} className={active === 'Angular' ? 'active' : null}>Marketing</button>
            <button onClick={() => {setActive('React-Native')
            const groub = product.filter(item => item.catrgyre === 'Bootstrap')
            setGroub(groub)
            }} className={active === 'React-Native' ? 'active' : null}>Finance</button>
        </div>
        <div className='porductings'>
        {groub.map((item)=>{
          return(
            <div key={item.id}  className="card">
                <img src={item.imges} width={276} alt="photo" loading='lazy' />
                <div className='targrit'>
                  <div className='leve'>
                    <span className='s-1'>{item.spanse}</span>
                   <span className='s-2'>  <i className="bi bi-heart"></i></span>
                  </div>
                  <h3>{item.titleing}</h3>
                  <p>Proposal indulged no do sociable he throwing settling.</p>
                  <div className='s-3'>
                     <span className='s-4'>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     </span>
                    <span>4.0/5.0</span>
                  </div>
                  <div className='s-5'/>
                  <div className='s-6'>
                    <div>
                    <i className="bi bi-clock"></i>
                    <span>15h 30m</span>
                    </div>
                    <div>
                    <i className="bi bi-table"></i>
                    <span>15 lectures</span>
                    </div>
                  </div>
                </div>
           </div>
          )
        })}
          
        </div>
    </div>
          
  )
}
