import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import axios from 'axios';

export default class ImageDrop extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            outline: ''
        }
    }

    onDragEnter = (e) => {
        e.preventDefault();
        e.dataTransfer.setData("image", e.target.id);

        this.setState({ outline: 'Red solid 10px' });
    }

    allowDrop = (e) => {
        e.preventDefault();
    }
    
    onDragLeave = (e) => {
        e.preventDefault();

        this.setState({ outline: '' });
    }
      
    onDrop = (e) => {
        e.preventDefault();

        this.setState({ outline: '' });

        const dt = e.dataTransfer;
        const fileList = dt.files;
        
        // ([...fileList]).forEach(file => {
        //     e.target.appendChild(file);
        // });

        this.props.onDrop(fileList);


        //this.uploadFiles(fileList);
    }
      
    drop = (e) => {
        e.preventDefault();
        var data = e.dataTransfer.getData("image");
        e.target.appendChild(document.getElementById(data));
    }

    uploadFiles = async (fileList) => {
        let data = new FormData();

        ([...fileList]).forEach(file => {
            console.log(file)
            const id = `${file.name}_${file.size}`;
            data.append('file', file);
        });


        for (var pair of data.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        this.props.onDrop(data);

        const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/test',
            data,
            withCredentials: true
        });
    }

    render() {
        return (
            <div
                id="dndImageUpload"
                style={{
                    width: '100%',
                    height: '10vh',
                    backgroundColor: 'Gray',
                    outline: this.state.outline
                }}
                onDragEnter={this.onDragEnter}
                onDragOver={this.allowDrop}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
            >
                Hi
            </div>

        )
    }

}