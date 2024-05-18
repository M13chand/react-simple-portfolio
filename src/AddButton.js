const AddButton = ({color,text}) => {
 console.log(color);
  return (
    <div>

  <button style={{backgroundColor:`${color}`,}} className="bg-green-700 px-2 rounded py-3 ">{text}</button>

    </div>
  )
}
export default AddButton