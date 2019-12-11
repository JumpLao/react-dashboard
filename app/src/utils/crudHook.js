import React from 'react'
import { useAsyncFn } from "react-use"
import { useRouteMatch } from "react-router"
import authClient from "./authClient"
import { useEffectOnce } from "react-use"
import { Skeleton, Result } from "antd"
import _ from 'lodash'

export const useFetch = () => {
  const match = useRouteMatch()
  const [state, fetch] = useAsyncFn(async () => {
    const {
      id
    } = match.params
    const res = await authClient.client.get(`/api/notes/${id}`)
    return res
  })
  useEffectOnce(() => {
    fetch()
  })
  if (state.loading) {
    return <Skeleton />
  }
  if (state.error) {
    const errorStatus = _.get(state, 'error.response.status')
    const message = _.get(state, 'error.response.data.error.message', 'Error occur')
    debugger
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
}