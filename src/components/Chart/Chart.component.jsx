import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import style from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [ dailyData, setDailyData ] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await fetchDaily());
		};

		fetchAPI();
	}, []);

	const lineChart = dailyData.length ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map(({ confirmed }) => confirmed),
						label: 'Infectati',
						borderColor: '#3333ff',
						fill: true
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						label: 'Morti',
						borderColor: 'red',
						backgroundColor: 'rgba(255, 0, 0, 0.5)',
						fill: true
					}
				]
			}}
		/>
	) : null;

	console.log(confirmed, recovered, deaths);
	const barChart = confirmed ? (
		<Bar
			data={{
				labels: [ 'Infectati', 'Recuperati', 'Morti' ],
				datasets: [
					{
						label: 'Persoane',
						backgroundColor: [ 'rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)' ],
						data: [ confirmed.value, recovered.value, deaths.value ]
					}
				]
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Cifrele actuale in ${country}` }
			}}
		/>
	) : null;

	return <div className={style.container}>{country ? barChart : lineChart}</div>;
};

export default Chart;
