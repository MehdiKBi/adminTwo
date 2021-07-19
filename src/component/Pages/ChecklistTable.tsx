import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteChecklistAction } from "../redux/action/checklistAction";

interface customProps {
  checklisteData?: any;
}


function ChecklistTable({ checklisteData }: customProps) {

  const [newDataAfterDelition, setNewDataAfterDelition] = useState(checklisteData)


  const handelDelete = (id: any) => {

      const deit = newDataAfterDelition.filter((i: any) => (
        i._id !== id
      ))
          setNewDataAfterDelition(deit)
      }
    

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">partner</th>
              <th scope="col">offer</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <tbody>
            {checklisteData.map((y: any) => (
              <tr key={y._id}>
                <td>{y.partner}</td>
                <td>{y.offer}</td>
                <td>{y.status}</td>
                <button onClick={()=>handelDelete(y._id)}>DELETE</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChecklistTable;
