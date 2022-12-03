import React from 'react'
import WeeklyMenu from "../constants/MenuAPI"

function Menu() {

    // get the day of the week
    const weekday = ["monday","tuesday","wednesday","thursday","friday"];
    const d = new Date();
    let day = weekday[d.getDay()];

    // get the menu of the day
    const menuOfTheDay = WeeklyMenu[day]

  return (
    <>

        // menu of the day items 
        {menuOfTheDay.map(({ meal }) => (
        <div className="flex items-center m-2 mt-5 space-x-2 rounded-xl cursor-pointer hover:bg-gray-200 bg-gray-100 p-3 hover:scale-105 transition transform duration-200 ease-out">
            <div>
                <h2 className="text-gray-700 font-semibold">{meal}</h2>
            </div>
        </div>
      ))}

      // next button 
      <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
        Next
      </button>
    </>
  )
}

export default Menu