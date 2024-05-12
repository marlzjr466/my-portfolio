/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'

// components
import Background from '@components/hexa-bg'
import Nav from '@components/nav'
import Hero from '@components/hero'

function App () {
  const { metaStates } = window.$reduxMeta.useMeta()

  const meta = useCallback({
    ...metaStates('app', ['mode'])
  })

  return (
    <>
      <div className="main-container">
        <Background />
        <div className="gradient-bg"></div>
        <div className="image-bg"></div>
        <div className={`theme-default ${meta.mode}`}>
          <Nav />
          <Hero />
        </div>
      </div>
    </>
  )
}

export default App