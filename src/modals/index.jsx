import { useRef, useEffect } from "react"

function Modal () {
  const animation = useRef()
  const panel = useRef()

  useEffect(() => {
    setTimeout(() => {
      let delay = 0
      for (let j = 0; j < animation.current.children.length; j++) {
        delay = Math.floor(Math.random() * (j + 500)) + 100
        animation.current.children[j].style.marginLeft = '15%',
        animation.current.children[j].style.transitionDelay = `${delay}ms`
      }

      setTimeout(() => {
        for (let j = 0; j < animation.current.children.length; j++) {
          animation.current.children[j].style.display = 'none'
        }
        panel.current.style.display = 'block'
      }, 1200)
    }, 100)
  }, [])

  const generateElement = (count, cn, childCount = 0) => {
    const html = []

    for (let i = 0; i < count; i++) {
      html.push(
        <div className={`${cn}`} key={i}>
          {
            Array(childCount).fill(1)
              .map((_, i) => <span key={i}></span>)
          }
        </div>
      )
    }

    return html
  }

  return (
    <>
      <div className="modal-container">
        <div
          ref={panel}
          className="modal-container__panel"
        >
        </div>

        <div
          ref={animation}
          className="modal-container__animation"
        >
          { generateElement(200, 'modal-container__animation--item') }
        </div>
      </div>
    </>
  )
}

export default Modal