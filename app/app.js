/**
 * Created by pengweifeng on 2017/8/28.
 */
import React, {Component} from 'react';
import { Line, Circle } from 'rc-progress'; //进度条
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            percent: 10
        }
    }
   render() {
       const { percent } = this.state;
       return (
           <div>
               <Line percent={50} //进度
                     strokeWidth={2 } //进度条粗细
                     trailWidth={2} //代表总和的线条宽度，永远<=上面的值strokeWidth
                     strokeColor="#f60" //进度条颜色
                     trailColor="#D3D3D3"
                     width="90%"
               />
           </div>
       )
   }
}
