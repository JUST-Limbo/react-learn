import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    repoName: '',
    respoUrl: '',
    isLoading: true,
    keyword: 'r',
    error: ''
  }

  componentDidMount() {
    const URL = `http://api.github.com/search/repositories?q=${this.state.keyword}&sort=stars`
    axios.get(URL).then((result) => {
      let { name, html_url } = result.data.items[0]
      this.setState({
        repoName: name,
        respoUrl: html_url,
        isLoading: false
      })
    }).catch((err) => {
      this.setState({
        isLoading: false,
        error: err
      })
    })
  }

  render() {
    const { repoName,
      respoUrl,
      isLoading,
      keyword,
      error } = this.state
    if (isLoading) {
      return <h2>Loading......</h2>
    } else if (repoName && respoUrl && !error) {
      return (
        <h2>在github上以[{keyword}]字母开头的仓库中,点赞数最多的是<a href={respoUrl}>{repoName}</a></h2>
      )
    } else {
      return (
        <h2>{error}</h2>
      )
    }
  }
}
