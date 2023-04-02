import React, { useState } from 'react'
import "../styles/SideBarStyles.css"
import icon from '../icons/back.png'
import heart from "../icons/heart.png"
import share from "../icons/share.png"
import view from "../icons/view.png"

const Sidebar = ({show}) => {
    // const [showSideBar, setShowSideBar] = useState(false)
    // const toggle = () =>{
    //     setShowSideBar(!showSideBar)
    // }
  return (
    <div className='wrapper'>
        <div className='arrowContainer'>
            <div className='back_icon_container'>
              <div className='icon_container'>
                <img src={icon} className='back_icon' />
              </div>
            </div>
            <div className='icon_gap'></div>
        </div>
        <div className='header_text_container'>
          <div className='side_gap'></div>
          <div className='tile_container'>
            <div className='top_gap'></div>
            <div className='title_text_conainer'>
            <h4>MAITREYA BUDDHA</h4>
          <h4>IN GESTURE OF </h4>
          <h4>FEARLESSNESS</h4>
          <h4>(ABHAYA MUDHRA)</h4>
            </div>
          </div>
          
        </div>
        <div className='icons_container'>
          <div className='icons_wrapper'>
            <div className='heart_contaier box'>
              <div className='box_container'>

            <img src={heart} className='icon_style'/>
              </div>
            <p>0</p>
            </div>
            <div className='share-container box'>
            <div className='box_container'>

            <img src={share} className='icon_style'/>
            </div>
            <p>120</p>

            </div>
            <div className='view_container box'>
            <div className='box_container'>

            <img src={view} className='icon_style'/>
            </div>
            <p>27</p>

            </div>
          </div>
          <div className='icons_gap'></div>
        </div>
        <div className='details_container'>
          <div className='deatils_gap'></div>
          <div className='details_inner_container'>
          <p>Dynasty : Ahichhtra</p>
          <p>Period : 200 CE</p>
          <p>Material : Sandstone</p>
          <p>Location : National Museum</p>
          </div>
        </div>
        <div className='description_container'>
        <div className='deatils_gap'></div>
          <div className='desc_header'>
          <div className='description_header_text'>
            <h3>Description :</h3>
          </div>
          <div className='description_paragraph'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ts survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions </p>
          </div>
          </div>
        </div>
        <div className='readmore_wrapper'>
        <div className='readmore_container'>
            {/* <div className='read_more_gap'></div> */}
            <div className='readmore_text'>
              <p>{"->"} Read More</p>
            </div>
          </div>
        </div>
          <div className='buttons_container'>
            <div className='add_to_collection'>
              <p>ADD TO COLLECTION</p>
            </div>
            <div className='souvenir_container'>
              <p>SOUVENIR</p>
            </div>
          </div>
    </div>
  )
}

export default Sidebar
