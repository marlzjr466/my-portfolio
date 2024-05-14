import { useEffect, useRef } from "react"
import PropTypes from 'prop-types'

function HexaBG (props) {
  const monitor = props.monitor
  const cursor = useRef()

  useEffect(() => {
    document.addEventListener(
      'mousemove',
      function (e) {
        let x = e.clientX
        let y = e.clientY

        cursor.current.style.top = `${y}px`
        cursor.current.style.left = `${x}px`
      }
    )
  }, [monitor])

  const generateElement = count => {
    const html = []

    for (let i = 0; i < count; i++) {
      html.push(<div key={i} className="hexa-bg__row--hexagon"></div>)
    }

    return html
  }

  return (
    <>
      <div className="hexa-bg">
        <div className="hexa-bg__cursor" ref={cursor}></div>
        {
          Array(40).fill(40)
            .map((count, i) => {
              return (
                <div
                  key={i}
                  className="hexa-bg__row"
                >
                  { generateElement(count) }
                </div>
              )
            })
        }
      </div>
    </>
  )
}

HexaBG.propTypes = {
  monitor: PropTypes.object.isRequired
}

export default HexaBG