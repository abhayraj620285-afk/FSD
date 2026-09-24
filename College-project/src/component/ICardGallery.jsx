import React from 'react'
import ICard from './ICard'
import cat from '../image/cat.jpg'
const ICardGallery = () => {
      const students = [
    {
        name: "Abhay",
        roll: "12345",
        branch: "CSE",
        college: "ABES ENGINEERING COLLEGE",
        pic: cat
    },
    {
        name: "Rahul",
        roll: "12346",
        branch: "CSE",
        college: "ABES ENGINEERING COLLEGE",
        pic: cat
    },
    {
        name: "Ankit",
        roll: "12347",
        branch: "ECE",
        college: "ABES ENGINEERING COLLEGE",
        pic: cat
    },
    {
        name: "Priya",
        roll: "12348",
        branch: "IT",
        college: "ABES ENGINEERING COLLEGE",
        pic: cat
    },
    {
        name: "Neha",
        roll: "12349",
        branch: "CSE",
        college: "ABES ENGINEERING COLLEGE",
        pic: cat
    }
];

  return (
    <div style={{
            display: "flex",
            gap: "20px",
            // flexWrap: "wrap"
        }} >
       {students.map(ele =>(
        <ICard data = {ele}/>
       ))}
    </div>
  )
}

export default ICardGallery