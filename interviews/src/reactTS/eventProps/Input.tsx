import React from 'react';
type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

//USING PROPS with Destructuring 
const TSInput = ({ value, handleChange }: InputProps) => {
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   console.log(event)
    // }
    return <input type='text' value={value} onChange={handleChange} />
}
export default TSInput;

//USING PROPS without Destructuring 
// const TSInput = (props: InputProps) => { //using props: syntX
//     // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     //   console.log(event)
//     // }
//     return <input type='text' value={value} onChange={handleChange} />
// } 