/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'

// components
import Background from '@components/hexa-bg'

function App () {
  const { metaStates } = window.$reduxMeta.useMeta()

  const meta = useCallback({
    ...metaStates('app', ['mode'])
  })

  return (
    <>
      <div className="main-container">
        <Background />
        
        <div className={`theme-default ${meta.mode}`}>
          <h1>This is my portfolio</h1>
        </div>
      </div>
    </>
  )
}

export default App