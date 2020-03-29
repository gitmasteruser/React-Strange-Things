import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LazyLoad from 'react-lazyload';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import Divider from '../components/Divider';
import AudioPlayer from "react-h5-audio-player";
import Locations from "../components/Locations";
import data from "../data/en_US.json";
import Pic from '../images/strangerthings.JPG';
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import Background from '../images/strangerthings3.png';



const Player = () => (
	<React.Fragment>
		<Img sizeX="100%" max="400px" rounded="50%" />
		<AudioPlayer
			style={{ display: "none" }}
			autoPlay
			loop
			preload='auto'
			src='mp3/strangerthings.mp3'
			onPlay={e => console.log("onPlay")}
		// other props here
		/>
	</React.Fragment>
);

const Overview = () => (
	<div>
		<Section style={{
			backgroundAttachment: 'fixed',
			backgroundPosition: 'center', backgroundSize: '20%', backgroundRepeat: 'no-repeat', backgroundImage: `url(${Background})`
		}} >
			<Grid>
				<Row center="xs">
					<Col xs={12} md={6}>
						<h2>Award Winning Television Show</h2>





					</Col>
				</Row>
				<Row center="xs">
					<Col xs={12} md={6}>
						<List style={{ marginTop: '170px' }}>
							<ListItem>TV Network:	Netflix</ListItem>
							<ListItem>Genre: Science Fiction & Fantasy</ListItem>
							<ListItem>Executive Producers: Matt Duffer, Ross Duffer, Shawn Levy, Dan Cohen, Karl Gajdusek</ListItem>
						</List>
					</Col>
				</Row>
			</Grid>
		</Section>
		<Grid>
			<Row center="xs">
				<Img src={Pic} sizeX="550px" />

				<Col xs={12}>
					<Title>
						{data.heading}
					</Title>

					<Paragraph>

						{data.description}
					</Paragraph>

					<Locations />

				</Col>
			</Row>
			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>
			<LazyLoad height={200} offset={-250}>
				<Row center="xs">
					<Col xs={12}>
						<SubTitle></SubTitle>
					</Col>
					<Col xs={12} lg={6}>
						<Paragraph></Paragraph>

						<Paragraph></Paragraph>

						<Paragraph></Paragraph>


						<Paragraph></Paragraph>

					</Col>
					<Col xs={12} lg={6}>
						<Paragraph style={{ display: "none" }}> </Paragraph>
						<Player style={{ display: "none" }} />
					</Col>
				</Row>
			</LazyLoad>
			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>
			<LazyLoad height={400} offset={-250}>
				<Row center="xs">
					<Col xs={12}>
						<SubTitle></SubTitle>
					</Col>
					<Col xs={12} >
						<Img sizeX="100%" sizeY="100%" max="600px" />
					</Col>
				</Row>
			</LazyLoad>
			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>
			{/* <LazyLoad height={400} offset={-250}>
				<Row center="xs">
					<Col xs={12}>
						<SubTitle>Companies I have work for</SubTitle>
					</Col>
					<Col xs={6} md={4} lg={3}>
						<Img src={Hilti} sizeX="100%" sizeY="100%" />
					</Col>
					<Col xs={6} md={4} lg={3}>
						<Img src={BankOfAmerica} sizeX="100%" sizeY="100%" />
					</Col>
					<Col xs={6} md={4} lg={3}>
						<Img src={Jpmorgan} sizeX="100%" sizeY="100%" />
					</Col>
					<Col xs={6} md={4} lg={3}>
						<Img src={IBM} sizeX="100%" sizeY="100%" />
					</Col>
					<Col xs={6} md={4} lg={3}>
						<Img src={CapitalOne} sizeX="100%" sizeY="100%" />
					</Col>
				</Row>
			</LazyLoad> */}
		</Grid>
	</div>
);

export default Overview;
