import React from 'react'
import styled from 'styled-components'

const Navbar = ({show}) => {
    return (
        <SideNav showBar={show}>
            <SideUL>
                <SideLI>
                    <SideA href='/dashboard'>Dashboard</SideA>
                </SideLI>
                <SideLI>
                    <SideA href='/expenses'>Expenses</SideA>
                </SideLI>
                <SideLI>
                    <SideA href='/budget'>Budget</SideA>
                </SideLI>
                <SideLI>
                    <SideA href='/contact'>Contact Us</SideA>
                </SideLI>
            </SideUL>
        </SideNav>
    )
}

export default Navbar

//Styled Components
const SideNav = styled.div `
    width: 150px;
    background: #011627;
    position: absolute;
    height: 95vh;
    padding-left: 10px;
    transition: all 1s;
    left: ${props => props.showBar ? '0px' : '-100%'}
`

const SideUL = styled.ul`
    padding: 0
`

const SideLI = styled.li`
    list-style-type: none;
    margin: 10px 0
`

const SideA = styled.a`
    color: #eaecef;
    font-size: 16px;
    text-decoration: none;
    display: block;
    padding: 10px 15px;
    border-radius: 6px;

    &:hover, :active {
        background: #172b4d
    }
`