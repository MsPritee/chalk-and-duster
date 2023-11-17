import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';



export default function Header() {
    return (
        <div>
            <header className="App-header">
                <div className='left-side'>
                    <h1>Chalk And Duster</h1>
                </div>
                <div className='right-side'>
                    <ul>
                        <li>
                            {/* <Link to='/aboutus'>
                                About
                            </Link> */}

                        </li>
                        <li>
                            Contact US
                        </li>
                    </ul>
                </div>

            </header>
        </div>
    )
}
