import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';

function Home(props)
{

  return (
    <div className='container roo' >
      <br />
      <br />
      <br />
      <div className='row text-white text-center heading'>
       TAKE THE QUIZ TO TEST YOUR GENERAL KNOWLEDGE<br/>
    
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='row text-center'>
        <div className='col-12'>
          <Link to='/quiz'>
            <Button color='info'>Play quiz</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;