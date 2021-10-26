import Navbar from './components/Navbar'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState} from 'react'
import { Route, Switch} from 'react-router-dom'

import Defaultpage from './components/Defaultpage'

function App() {
    const [showNav, setShowNav] = useState(false)

    return (
        <div>
            <Switch>
                <Route exact path="/dashboard">
                    <NavHeader>
                        < GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
                    </NavHeader>
                    <Navbar show={showNav} />
                    {/* DashBoard Stuff */}
                </Route>

                <Route exact path="/expenses">
                    <NavHeader>
                        < GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
                    </NavHeader>
                    <Navbar show={showNav} />
                    {/* Expenses Stuff */}
                </Route>

                <Route exact path="/budget">
                    <NavHeader>
                        < GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
                    </NavHeader>
                    <Navbar show={showNav} />
                    {/* Budget Stuff */}
                </Route>

                <Route exact path="/contact">
                    <NavHeader>
                        < GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
                    </NavHeader>
                    <Navbar show={showNav} />
                    {/* Contact Stuff */}
                </Route>

                <Route exact path="/">
                    <Defaultpage />
                </Route>
            </Switch>
        </div>
        );
    }

export default App;

//Styled Components
const NavHeader = styled.header`
    color: #eaecef;
    padding: 15px 30px;
    background: #011627;
    display: flex;
    height: 40px;
    font-size: 40px;
`