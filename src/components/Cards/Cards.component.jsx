import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import style from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return 'Loading...';
	}
	return (
		<div className={style.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(style.card, style.infected)}>
					<CardContent className={style.content}>
						<Typography color="textSecondary" gutterBottom>
							Infectati
						</Typography>
						<Typography variant="h5" component="h2">
							<CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2" component="p">
							Persoane infectate
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(style.card, style.recovered)}>
					<CardContent className={style.content}>
						<Typography color="textSecondary" gutterBottom>
							Recuperati
						</Typography>
						<Typography variant="h5" component="h2">
							<CountUp start={0} end={recovered.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2" component="p">
							Persoane recuperate
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(style.card, style.deaths)}>
					<CardContent className={style.content}>
						<Typography color="textSecondary" gutterBottom>
							Decedați
						</Typography>
						<Typography variant="h5" component="h2">
							<CountUp start={0} end={deaths.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2" component="p">
							Persoane decedate
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
