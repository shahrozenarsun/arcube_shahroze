import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';

const App = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-cube' /> ArCube
    </h4>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <FileUpload url={"http://narsunprojects.com:9091/upload1"} uploadedURL={"http://narsunprojects.com:9091/img/image1.png"} image={1}/>
      <FileUpload url={"http://narsunprojects.com:9091/upload2"} uploadedURL={"http://narsunprojects.com:9091/img/image2.png"} image={2}/>
      <FileUpload url={"http://narsunprojects.com:9091/upload3"} uploadedURL={"http://narsunprojects.com:9091/img/image3.png"} image={3}/>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <FileUpload url={"http://narsunprojects.com:9091/upload4"} uploadedURL={"http://narsunprojects.com:9091/img/image4.png"} image={4}/>
      <FileUpload url={"http://narsunprojects.com:9091/upload5"} uploadedURL={"http://narsunprojects.com:9091/img/image5.png"} image={5}/>
      <FileUpload url={"http://narsunprojects.com:9091/upload6"} uploadedURL={"http://narsunprojects.com:9091/img/image6.png"} image={6}/>
    </div>
  </div>
);

export default App;
