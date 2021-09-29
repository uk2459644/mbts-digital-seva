import { Pie } from "react-chartjs-2"

export default function PieChart({total_marks,correct_marks,wrong_marks,final_marks}){

    const data = {
        labels: ['Total marks', 'Right marks', 'Negative marks', 'Final marks'],
        datasets: [
          {
            label: 'Status of marks',
            data: [`${total_marks}`, `${correct_marks}`, `${wrong_marks}`, `${final_marks}`],
            backgroundColor: [
              
              'rgba(0,128,128, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(2,137,0, 0.6)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              
              'rgba(0,128,128, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(2,137,0, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }

    return(
        <div className="w-full md:w-1/2 align-content-center p-4 md:pl-8">
            <Pie data={data} />
        </div>
    )
}