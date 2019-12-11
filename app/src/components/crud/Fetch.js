import React, { useImperativeHandle } from 'react'
import { Skeleton, Result } from 'antd'
import _ from 'lodash'
import { useAsyncRetry } from 'react-use'

const Fetch = React.forwardRef(({
  fetch = (payload) => Promise.resolve(payload),
  params,
  children
}, ref) => {
  const state = useAsyncRetry(async () => {
    const res = await fetch(params)
    return res
  }, [params])
  useImperativeHandle(ref, () => ({
    reload: state.retry
  }))
  if (state.loading) {
    return <Skeleton />
  }
  if (state.error) {
    const errorStatus = _.get(state, 'error.response.status')
    const message = _.get(state, 'error.response.data.error.message', 'Error occur')
    if (errorStatus) {
      return (
        <Result
          status={errorStatus.toString()}
          title={errorStatus.toString()}
          subTitle={message}
        />
      )
    }
    return <Result status="500"/>
  }
  return (
    <React.Fragment>
      {children(state.value)}
    </React.Fragment>
  )
})

export default Fetch
