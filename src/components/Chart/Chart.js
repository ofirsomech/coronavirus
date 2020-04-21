import React, { useState, useEffect } from 'react';
import { Line, Bar } from "react-chartjs-2";
import './Chart.css';
import { getDailyData } from "../../Api";

const Chart = ({ data, country , language }) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setDailyData(await getDailyData());
        };
        getData();
    }, [])





    const barChart = (
        data.confirmed ?
            <
                Bar data={
                    {
                        labels: [language.infected, language.recovered, language.death],
                        datasets: [{
                            label: language.people,
                            backgroundColor: [
                                'rgba(0,0,255, 0.5',
                                'rgba(0,255,0, 0.5',
                                'rgba(255,0,0, 0.5',
                            ],
                            data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                        }]
                    }
                }
                options={
                    {
                        legend: { display: false },
                        title: { display: true, text: `${language.CurrentStateIn} ${country}` }
                    }
                }
            /> : null
    );

    const lineChart = (
        dailyData.length ?
            <
                Line

                data={
                    {

                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: language.infected,
                            borderColor: '$3333ff',
                            fill: true
                        },
                        {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: language.death,
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true
                        }
                        ]
                    }
                }
            /> : null
    )

    const setCharts = () => {
        console.log(country);
        if (country) {
            return barChart;
        } else if (country === 'global') {
            return lineChart;
        } else {
            return lineChart;
        }
    }




    return (
        <div className="continer" > {setCharts()}</div>
    );
};

export default Chart;