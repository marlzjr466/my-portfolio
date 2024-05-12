import { useRef } from "react"

// composable
import navList from "@composable/nav-list"

function Nav () {
  const { list } = navList()
  const indicator = useRef()

  const generateElement = count => {
    const html = []

    for (let i = 0; i < count; i++) {
      html.push(<div key={i}></div>)
    }

    return html
  }

  return (
    <>
      <ul className="navigation">
        <li
          className="navigation__item"
        >
          <span>
            <i className="fa fa-angle-left"></i>
          </span>
            <div className="glitch-logo">
              Mario Jr
            </div>
          <span>
            /<i className="fa fa-angle-right"></i>
          </span>
        </li>
        
        {
          list.map((item, i) => {
            return (
              <li
                key={i}
                className={`navigation__item ${i === 0 ? 'active' : ''}`}
                onClick={e => {
                  const left = 130 * i

                  for (let j = 0; j < indicator.current.children.length; j++) {
                    indicator.current.children[j].style.marginLeft = `${left}px`,
                    indicator.current.children[j].style.transitionDelay = `${Math.floor(Math.random() * (j + 300)) + 100}ms`
                  }

                  const lis = document.querySelectorAll('.navigation__item')
                  for (const li of lis) {
                    li.classList.remove('active')
                  }
                  
                  e.target.classList.add('active')
                }}
              >
                { item.name }
              </li>
            )
          })
        }

        <li
          ref={indicator}
          className="navigation__indicator"
        >
          { generateElement(25) }
        </li>

        <li className="navigation__btn">
          <button>hire me</button>
        </li>
      </ul>
    </>
  )
}

export default Nav