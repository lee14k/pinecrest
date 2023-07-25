import './Headbanner.css'
function Headbanner () {
    return (
<div className="headbannerwrapper">
    <img src="/newpclogo.png" alt="" className='logo'/>
    <h1>Quality Assisted Living for Older Adults</h1>
    <a href= "tel:+2622498900">
    <button className='phonebutton'>
    <img src='/phoneicon.png' className='phoneicon'/>

        Schedule a visit</button>
        </a>
</div>
    )
}

export default Headbanner