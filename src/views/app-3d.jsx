/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'

// images
import AI from '@assets/images/ai-bg.jpg'
import MainBG from '@assets/images/main-bg.jpg'

// composable
import navList from '@composable/nav-list'

// components
import Hero from '@components/hero'

// modal
import Modal from '@modals'

function App3d () {
  const { metaStates, metaMutations } = window.$reduxMeta.useMeta()
  const { list } = navList()

  // const boxFaces = ['front', 'back', 'right', 'left', 'top', 'bottom']
  const meta = useCallback({
    ...metaStates('app', [
      'mode',
      'showModal'
    ]),

    ...metaMutations('app', ['SET_SHOW_MODAL'])
  })

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
      <div className="main-container">
        <div className={`${meta.mode}`}>
          <img className="app-3d__bg" src={MainBG} alt="Main BG" />

          <div className="scene">
            <div className="scene__wall">
              <img src={AI} alt="AI Bg" />
              <Hero />
            </div>
            
            <div className="scene__floor"></div>

            <div className="scene__stage">
              { generateElement(50, 'scene__stage--base') }
            </div>

            <div className="scene__text">
              {
                list.map((nav, i) => {
                  return (
                    <div
                      key={i}
                      className="glitch-wrapper"
                      onClick={() => {
                        meta.SET_SHOW_MODAL(true)
                      }}
                    >
                      <div className="glitch" data-glitch={nav.name}>
                        { nav.name }
                      </div>
                    </div>
                  )
                })
              }
            </div>

            {/* <div className="scene__box">
              {
                boxFaces.map(face => {
                  return (
                    generateElement(1, `scene__box--${face}`)
                  )
                })
              }
            </div> */}
          </div>
        </div>

        {
          meta.showModal && <Modal />
        }
      </div>
    </>
  )
}

export default App3d