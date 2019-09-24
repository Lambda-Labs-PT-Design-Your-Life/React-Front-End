import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import styled from 'styled-components'

export default function Nav() {

  const StyledNav = styled.div `
    position: relative;
    z-index: 1000;
  `

  return (
    <StyledNav>
      <TopNav />
      <BottomNav />
    </StyledNav>
  )
}