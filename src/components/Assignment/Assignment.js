import axios from 'axios';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

import React, { Component } from 'react';
import './Assignment.css'

class Assignment extends Component {

	state = {

		// Initially, no file is selected
		selectedFile: null
	};

	// On file select (from the pop up)
	onFileChange = event => {

		// Update the state
		this.setState({ selectedFile: event.target.files[0] });

	};

	// On file upload (click the upload button)
	onFileUpload = () => {

		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append(
			"myFile",
			this.state.selectedFile,
			this.state.selectedFile.name
		);

		// Details of the uploaded file
		console.log(this.state.selectedFile);

		// Request made to the backend api
		// Send formData object
		axios.post("api/uploadfile", formData);
	};

	// File content to be displayed after
	// file upload is complete
	fileData = () => {

		if (this.state.selectedFile) {

			return (
				<div>
					<h2>File Details:</h2>

					<p>File Name: {this.state.selectedFile.name}</p>


					<p>File Type: {this.state.selectedFile.type}</p>


					<p>
						Last Modified:{" "}
						{this.state.selectedFile.lastModifiedDate.toDateString()}
					</p>

				</div>
			);
		} else {
			return (
				<div>
					<br />
					<h4>Choose before Pressing the Upload button</h4>
				</div>
			);
		}
	};

	render() {

		return (
			<>
				<div className='a-container'>

					<h1>
						Assignment Submission
					</h1>

					<div className='a-a-container'>
						<div className="a-m">
							<h3>
								Understanding Matplotlib better
							</h3>
							<h4>Due April 22, 2022 (11:59PM) | Points 10 | Submission Type File </h4>
						</div>
						<div className='option'>
							<h3> Question.pdf </h3>
						</div>
					</div>
					<div className='line'>
					<hr style={{
						color: '#000000',
						backgroundColor: '#000000',
						height: .5,
						borderColor: '#000000'
					}} /></div>

					<div className='a-b-container'>
						<div className='a-b-l'>
							<h2 >Instruction</h2>
							<ul>
								<li>You must use a functioning webcam and microphone</li>
								<li>No cell phones or other secondary devices in the room or test area</li>
								<li>Your desk/table must be clear or any materials except your test-taking device</li>
								<li>No one else can be in the room with you</li>
								<li>No talking </li>
								<li>The testing room must be well-lit and you must be clearly visible</li>
								<li>No dual screens/monitors</li>
							</ul>

						</div>
						<div className='line-h'>
					<hr style={{
						color: '#000000',
						backgroundColor: '#000000',
						height: 0.5,
						width: '20rem' ,
						transform: 'rotate(-90deg)',
					}} /></div>
						<div className='a-b-l-s'>
							<h2>Your Submission</h2>
							<input type="file" onChange={this.onFileChange} />
							<input type="text" className='a-b-comment' value={"Comment"} />
							<button className="a-b-button" onClick={this.onFileUpload}>
								Submit
							</button>
							{this.fileData()}
						</div>
					</div>

				</div>
			</>
		);
	}
}

export default Assignment;
