import React from 'react';
import { Link } from 'react-router-dom';
import "./aside.css";


function Aside() {
  return (
    <div>
      <div className='aside' >
          <ul>
              <li className='cat'><Link to='/Home/category1'>category 1</Link> </li>
              <li className='cat'><Link to='category2'>category 2</Link> </li>
              <li className='cat'><Link to='category3'>category 3</Link> </li>
              <li className='cat'><Link to='category4'>category 4</Link> </li>
              <li className='cat'><Link to='category5'>category 5</Link> </li>
              <li className='cat'><Link to='category6'>category 6</Link> </li>
              <li className='cat'><Link to='category7'>category 7</Link> </li>
          </ul>
        </div>
    </div>
  );
}
export default Aside;