import './Headbanner.css'
function Headbanner () {
    return (
<div className="headbannerwrapper">
    <img src="src/assets/newpclogo.png" alt="" className='logo'/>
    <h1>Quality Assisted Living for Older Adults</h1>
    <button className='phonebutton'>
    <img src='src/assets/phoneicon.png' className='phoneicon'/>

        Schedule a visit</button>
</div>
    )
}

export default Headbanner