/**
 * Created by pengweifeng on 2017/8/28.
 */
import React, {Component} from 'react';
import { Line, Circle } from 'rc-progress'; //进度条
import { Progress, Button } from 'antd-mobile';  //进度条

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            percent: 50, // 进度
            bgcolor: '#ddd' // 底色
        }
    }
    componentWillMount(){
        const {percent} = this.state;
        let ProgressNum = 0;
        this.setState({percent: 0});
        const _run = () => {
            if (ProgressNum++ == percent) return;
            this.setState({percent: ProgressNum});
            setTimeout(_run, 10);
        };
        _run();
    }
   render() {
       const { percent, bgcolor} = this.state;
       return (
           <div>
               <Line percent={percent}
                     strokeWidth={2} //进度条粗细
                     trailWidth={2} //代表总和的线条宽度，永远<=上面的值strokeWidth
                     strokeColor="#f60" //进度条颜色
                     trailColor={bgcolor}
                     width="60%"
               />

               <Progress
                   percent={percent}
                   position="normal" //进度条的位置，fixed 将浮出固定在最顶层，可选: fixed normal
                   unfilled="show" //是否隐藏未填充轨道，可选：show hide 默认show
               />
           </div>
       )
   }
}
