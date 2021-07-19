import React from "react";

interface customProps {
  checklisteDatatw?:any
}

function ChecklistTable({checklisteDatatw}: customProps) {
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
            {checklisteDatatw.map((y: any) => (
              <tr>
                <td key={y.partner}>{y.partner}</td>
                <td key={y.offer}>{y.offer}</td>
                <td key={y.status}>{y.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChecklistTable;
