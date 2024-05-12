import { useEffect, useRef } from "react"

function HexaBG () {
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
  }, [])

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
          Array(20).fill(20)
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

export default HexaBG