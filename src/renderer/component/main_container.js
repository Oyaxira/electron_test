import React, { Component } from 'react'
import './main_container.scss'
import http from '../until/http'

export default class MainContainer extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    http.get("https://youzhao.io").then(resp => {
      console.log(resp.data)
    })
  }

  render() {
    return <div className="main-container">
      <h1>露露露</h1>
    </div>
  }
}