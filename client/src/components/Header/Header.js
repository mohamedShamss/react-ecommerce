import React from 'react'
import '../../css/Header/Header.css'
import '../../words'
import { words } from '../../words'
function Header() {
  return (
    <header>
        <h1>{words.headerTitle}</h1>
    </header>
  )
}

export default Header