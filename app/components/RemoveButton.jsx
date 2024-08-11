'use client'

const RemoveButton = ({ id }) => {

    const handleDelete = async () => {
        const confirmed = confirm("Are you sure you want to delete this question?");
    if(confirmed){
        const response = await fetch(`http://localhost:3000/api/problems?id=${id}`, {
        method: "DELETE",
    }

    );}
    }

  return (
    <button 
    onClick={handleDelete}
        className="bg-red-400 text-white text-xs mt-2 py-1 px-2 rounded">
        Delete
    </button>
  )
}

export default RemoveButton
