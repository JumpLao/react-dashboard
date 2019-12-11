import React from 'react'
import { useAsync } from 'react-use'
import { Skeleton, Result } from 'antd'
import _ from 'lodash'

const Fetch = ({
  fetch = (payload) => Promise.resolve(payload),
  children
}) => {
  const state = useAsync(async () => {
    const res = await fetch()
    return res
  })
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
}

export default Fetch
