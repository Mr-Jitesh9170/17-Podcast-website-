import { useState } from "react"
import "../Scss-files/search.scss"
import { DashboardIcons, SearchData } from "../AllData/data"
export const Search = () => {
  return (
    <div className="search-container">
      <div className="search-Top">
        <div className="search-top-icon" >{DashboardIcons.searchIcon}</div>
        <input type="text" placeholder="Search Artist/Podcast....." />
      </div>
      <div className="search-bottom">
        {
          SearchData.map(({ name, color, img }) => {
            return (
              <>
                <div className="search-boxes" style={{ backgroundColor: `${color}` }}>
                  <div>{name}</div>
                  <img src={img} alt="" />
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}