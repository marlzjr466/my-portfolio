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
      html.push(<div key={i} className="hexagon"></div>)
    }

    return html
  }

  return (
    <>
      <div className="hexa-bg">
        <div className="cursor" ref={cursor}></div>
        {
          Array(20).fill(20)
            .map((count, i) => {
              return (
                <div
                  key={i}
                  className="row"
                >
                  { generateElement(count) }
                </div>
              )
            })
        }
        <div className="on-top"></div>
      </div>
    </>
  )
}

export default HexaBG