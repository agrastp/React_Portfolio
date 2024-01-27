import Resume from '../assets/files/resume.pdf'


export default function ResumePage() {
  // The Navbar component will render each of the Link elements in the links prop
  return (
    <>
      <h1>Resume Page</h1>


      <a href={Resume} download="Resume" target='_blank'>
        <button className="resume">Download Resume</button>
      </a>
    </>
  );
}