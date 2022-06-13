import '../potfolioWebsite/index.css';

export default function ResumeComponent()
{
    return(
        <div className="bg-dark m-0 p-0" style={{fontSize: '1em'}}>
        <div className="d-flex justify-content-center pt-5 pb-5">   
            <div className="w-50 border border-dark bg-light">
                <div className="text-end mt-5 me-4 border-bottom ms-4">
                    <h2>AKSHAY RAKHUNDE</h2>
                    <div className="mb-2">Web Developer</div>
                </div>
                <div className="mt-4 ms-4 me-4">
                    <h5 style={{backgroundColor: 'lightblue'}}>CAREER OBJECTIVE</h5>
                    <p>Looking for opportunities to incorporate my skills and training to help the company grow. I am looking forward to roles that will help me realise my potential by exploring the various aspects of this field.</p>
                </div>
                <div className="ms-4 me-4" style={{lineHeight: '1em'}}>
                    <h5 style={{backgroundColor: 'lightblue'}}>EDUCATIONAL QUALIFICATIONS</h5>
                    <dl>                        
                        <dt className='mb-2'>
                            <span className="bi bi-mortarboard-fill me-2" style={{fontSize: '1em'}}></span> 
                            Sardar Patel College Chandrapur
                        </dt>
                        <dd className='ms-4'> University - Gondwana University Gadchiroli</dd>
                        <dd className='ms-4'> Course - Bachelor of Science in Information Technology B.sc (I.T)</dd>
                        <dd className='ms-4'> Year of Passing - 2021</dd>
                    </dl>
                    <dl>
                        <dt className='mb-2'>
                            <span className="bi bi-book-half me-2" style={{fontSize: '1em'}}></span> 
                            Anand Niketan College Warora
                        </dt>
                        <dd className='ms-4'> HSC | Maharashtra State Board</dd>
                        <dd className='ms-4'> Year of Passing - 2018</dd>
                    </dl>
                    <dl>   
                        <dt className='mb-2'>
                            <span className="bi bi-book-half me-2" style={{fontSize: '1em'}}></span>
                            Hiralal Loya Vidyalaya Warora
                        </dt>
                        <dd className='ms-4'> HSC | Maharashtra State Board</dd>
                        <dd className='ms-4'> Year of Passing - 2016</dd>
                    </dl>
                </div>
                <div className="ms-4 me-4">
                    <h5 style={{backgroundColor: 'lightblue'}}>SOFTWARE SKILLS</h5>
                    <ul>
                        <li>Full Stack UI Web Development Course Completed <br /> Form Naresh I.T Hyderabad</li>
                        <li> Editors : Sublime Text & Visual Studio Code (Microsoft's)</li>
                        <li>Repository : GitHub</li>
                    </ul>  
                </div>
                <div className="ms-4 me-4">
                    <h5 style={{backgroundColor: 'lightblue'}}>PROJECT DETAILS</h5>
                    <dl>
                        <dt>Project Name - Bigdeal Online Shopping</dt> 
                        <dd>The online shopping is a website that allows the users to shop online without going to the shops to buy them. This is help in saving the Energy, Time, Fuel needed to do the shopping by going to the shop.</dd>
                        <dt>Resume</dt>
                        <dd>I have created my resume by using HTML CSS and Bootstrap.</dd>
                    </dl>
                </div>
                <div className='ms-4 me-4' style={{lineHeight: '1em'}}>
                    <h5 style={{backgroundColor: 'lightblue'}}>KEY SKILLS</h5>
                    <ol className='list-unstyled d-flex justify-content-between ms-5 me-5'>
                        <li>React.js</li>
                        <li>HTML4 & 5</li>
                        <li>CSS2 & 3</li>
                    </ol>
                    <ol className='list-unstyled d-flex justify-content-between ms-5 me-5'>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                    </ol>
                    <ol className='list-unstyled d-flex justify-content-between ms-5 me-5'>
                        <li>Node JS</li>
                        <li>Express js</li>
                        <li>MongoDB</li>
                    </ol>
                    <div className='ms-5'>MS-Office (Word, Excel, PowerPoint)</div>
                </div>
                <div className='ms-4 me-4 mt-3'>
                    <h5 style={{backgroundColor: 'lightblue'}}>REFERENCE</h5>
                    <p className='ms-5'>Referred by Naresh I Technology Hyderabad</p>
                </div>
                <ol className="list-unstyled ms-4 mt-3" style={{marginTop: '-5%'}}>
                    <li>Place: Hyderabad <span style={{marginLeft: '43%'}}>Akshay Arvind Rakhunde</span></li>
                    <li>Date: <span style={{marginLeft: '65%'}}>Signature</span></li>
                </ol>
            </div>
            <div className="w-25 border border-dark bg-black text-white">
                <div>
                   <div className="d-flex justify-content-center mt-4"><img src="backgroundImg/myPic.jpeg" width='70%' style={{borderRadius: '50%'}} alt="This is Profile Photo" /></div>               
                    <ol className="list-unstyled ms-4 mt-4">
                        <li className="bi bi-whatsapp"><a href="tel:+8329093880" className="ms-3 text-white text-decoration-none">8329093880</a></li>
                        <li className="bi bi-telephone-fill"><a href="tel:+9096813971" className="ms-3 text-white text-decoration-none">9096813971</a></li>
                        <li className="bi bi-envelope-fill"><a className="ms-3 text-white text-decoration-none" href="mailto:rakhundeakshay29@gmail.com" target="_blank">rakhundeakshay29@gmail.com</a></li>
                        <li className="bi bi-geo-alt-fill"><a href="#" className="ms-3 text-white text-decoration-none">Ameerpeth Hyderabad 500038, Telangana.</a></li>               
                    </ol>
                    <ol className="list-unstyled ms-4">
                        <li>Father Name :<span className="ms-3"> Arvind Rakhunde</span></li>
                        <li>Date of Birth :<span className="ms-3"> 29/01/2000</span></li>
                        <li>Gender :<span className="ms-5"> Male</span></li>
                        <li>Nationality :<span> Indian</span></li>
                        <li>Permanent Address: At-Mangli Tah-Zari (Jamni) Dist-Yavatmal 445305 Maharashtra, India</li>
                        <li>Religion: <span>Hindu</span></li>
                        <li>Marrital Status: <span>Unmarried</span></li>
                        <li>Language Known: <span>Marathi Hindi English</span></li>
                        <li>Hobbirs: <span>Play Cricket Watch Movies</span></li>
                        <li>Reference / Referens: Naresh I.T Hyderabad</li>
                    </ol>
                    <ol className="list-unstyled d-flex justify-content-center" style={{marginTop: '130px', fontSize: '20px'}}>
                        <li className="bi bi-linkedin"><a className="ms-3 text-white text-decoration-none" href="https://www.linkedin.com/in/akshay-rakhunde-837819206" target="_blank"></a></li>
                        <li className="bi bi-instagram"><a className="ms-3 text-white text-decoration-none" href="https://www.instagram.com/invites/contact/?i=q49h5dkubwlf&utm_content=1umwdne" target="_blank"></a></li>
                        <li className="bi bi-facebook"><a className="ms-3 text-white text-decoration-none" href="https://www.facebook.com/akshay.rakhunde.35" target="_blank"></a></li>
                        <li className="bi bi-twitter"><a className="ms-3 text-white text-decoration-none" href="https://twitter.com/rakhundeakshay2?t=RKWyGUqQNCip4FzFnNRPZw&s=08" target="_blank"></a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    ) 
}