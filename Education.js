import React from 'react'
import './Educationstyle.css'

const Education = () => {
  return (
    <div className='edu'>
         <h3>Technical Skills:</h3>
     <img src={require("./hari.jpg")} alt='ME'></img>
      <ol>
        <li>Html</li>
        <li>Css</li>
        <li>Js</li>
        <li>React</li>
        <li>Django</li>
        <li>Python</li>
      </ol>
      <div className='education'>
      <h3>Education:</h3>
      <table>
        <tr>
            <th>Grade</th>
            <th>Marks</th>
            <th>Place</th>
        </tr>
        <tr>
            <td>UG</td>
            <td>8.1</td>
            <td>Kgisl Institute Of Technology</td>
        </tr>
        <tr>
            <td>HSLC</td>
            <td>94.1%</td>
            <td>Shree Dharmasastha Matric School</td>
        </tr>
        <tr>
            <td>SSLC</td>
            <td>94.6%</td>
            <td>St.Francis A.I.G.H school</td>
        </tr>
      </table>
      </div>

    </div>
  )
}

export default Education
