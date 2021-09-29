import React from 'react'
import { Bar } from 'react-chartjs-2'


export default function VerticalBarChart({total_question,attempt_question,correct_question,
  wrong_question,skiped_question}){

    const data = {
        labels: ['Total ', 'Attempted', 'Right', 'Wrong', 'Skipped'],
        datasets: [
          {
            label: 'Status of questions',
            data: [`${total_question}`, `${attempt_question}`, `${correct_question}`, `${wrong_question}`, `${skiped_question}`],
            backgroundColor: [
              
              'rgba(54, 162, 235, 0.6)',
              
              'rgba(0,210,127, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              
              'rgba(54, 162, 235, 1)',
              
              'rgba(0,210,127, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }

      
    return(
        <div className="w-full md:w-1/2 align-content-center p-4 md:pl-8">
            <Bar data={data} options={options} />
        </div>
    )
}