import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         introduction: "Hello!",
         buttonText: "Exit!",
         count: 0,
      };
   }

   handleClick() {
      this.setState((prevState, prevProps) => {
         console.log('Previous State:', prevState)
         console.log('Previous Props:', prevProps)
         return {
            introduction: prevState.introduction === "Hello!" ? "Goodbye" : "Hello!",
            buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
         }        
      })
   }

   render(){
      return (
         <div>
            <h1>{this.state.introduction} {this.props.greeting}</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
         </div>
      )
   }
}

export default StatefulGreetingWithPrevState