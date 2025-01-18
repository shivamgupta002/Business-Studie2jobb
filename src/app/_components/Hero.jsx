import React from 'react'
import "../_css/Hero.css"
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BadgeIcon from '@mui/icons-material/Badge';

const Hero = () => {
  return (
    <>
      <div className="bg_hero">
        <div className="bg_color">
          <p className='content'>
            Find Job, Employment, and Career Opportunities
          </p>
          <h1 className='hero_h1'>The Easiest way to get your new Job</h1>
          <div className="hero_stats">
            <div className="stats_1">
              <PublicIcon className='hero_img' sx={{ fontSize: "3.5rem" }} />
              <div className='hero_figure'>
                <h2> 46</h2>
                <p>
                  Countries
                </p>
              </div>
            </div>
            <div className="stats_1">
              <LocationCityIcon className='hero_img' sx={{ fontSize: "3.5rem" }} />
              <div className='hero_figure'>
                <h2> 450</h2>
                <p>
                  Companies
                </p>
              </div>
            </div>
            <div className="stats_1">
              <BadgeIcon className='hero_img' sx={{ fontSize: "3.5rem" }} />
              <div className='hero_figure'>
                <h2> 80,000</h2>
                <p>
                  Active Employees
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Hero