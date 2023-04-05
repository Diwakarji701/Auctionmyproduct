import React,{Component} from 'react'

export default class Category extends Component {
    render(){
  return (
    <>
    <div className="heading">
                <div className="i2-name">Popular Category: </div>
            </div>
            <div className="contents">
                <div className="cards">
                    <div className="liveimg">
                        <img src="https://3.imimg.com/data3/GD/GW/MY-6368147/indian-artifacts-500x500.jpg" alt="..?"></img>
                    </div>
                    <div className="itemname">Artifacts</div>
                    <a href="/#"><div className="price">See All</div></a>
                </div>
            
                <div className="cards">
                    <div className="liveimg">
                        <img src="https://5.imimg.com/data5/EV/PQ/MY-13748354/gold-imitiation-necklace-set-500x500.jpg" alt="..?"></img>
                    </div>
                    <div className="itemname">Jewellery</div>
                    <a href="/#"><div className="price">See All</div></a>
                </div>
                <div className="cards">
                    <div className="liveimg">
                        <img src="https://cdn.luxe.digital/media/2019/09/12085003/casual-dress-code-men-style-summer-luxe-digital.jpg" alt="..?"></img>
                    </div>
                    <div className="itemname">Fashion</div>
                    <a href="/#"><div className="price">See All</div></a>
                </div>
                <div className="cards">
                    <div className="liveimg">
                        <img src="https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXV0b21vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="..?"></img>
                    </div>
                    <div className="itemname">Automobiles</div>
                    <a href="/#"><div className="price">See All</div></a>
                </div>
                
                
            </div>
    </>
  )
}
}
