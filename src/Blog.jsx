import React from "react";
import Article from "./Article";
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

const Blog = () => {
  // this.state = {
  //   isPublished: false,
  //   count: 0
  // }

  // componentDidMount() {
  //   document.getElementById( 'counter').addEventListener('click', this.countUp)
  // }

  // componentDidUpdate() {
  //   if (this.state.count >= 10){
  //     this.setState( {count: 0 })
  //   }
  // }

  // componentDidCatch() {
  //   document.getElementById( 'counter').removeEventListener('click', this.countUp)
  // }

  // togglePublished = () => {
  //   this.setState( {
  //     isPublished: !this.state.isPublished
  //   })
  // };

  // countUp = () => {
  //   this.setState( { count: this.state.count + 1})
  // }

  return (
    <>
      <Article 
        title = {"止まるんじゃねぇぞ"} 
        // isPublished = {this.state.isPublished} 
        // toggle = {() => this.togglePublished()}
        // count = {this.state.count}
      />
      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </>
  )
}

export default Blog