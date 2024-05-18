const IconArrowDown = () => {
  return (
    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      {/* <!-- Vertical line of the arrow --> */}
      <line x1="24" y1="0" x2="24" y2="48" stroke="black" stroke-width="2"/>
      {/* <!-- Left diagonal line of the arrow tip --> */}
      <line x1="6" y1="28" x2="24" y2="48" stroke="black" stroke-width="2"/>
      {/* <!-- Right diagonal line of the arrow tip --> */}
      <line x1="42" y1="28" x2="24" y2="48" stroke="black" stroke-width="2"/>
    </svg>    
  )
}

export default IconArrowDown;