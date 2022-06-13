import '../potfolioWebsite/index.css';

export default function HeaderComponent() {
    return (
        <header>
            <div className='d-flex justify-content-between text-white p-2 bg-danger'>
                <h1 style={{marginLeft: '4%'}}>Portfolio.</h1>
                <ol className='list-unstyled row me-0 align-items-center'>
                    <li className='col'>HOME</li>
                    <li className='col'>ABOUT</li>
                    <li className='col'>PROJECT</li>
                    <li className='col'>SKILL</li>
                    <li className='col'>CONTACT</li>
                    <li className='col'>JOIN</li>    
                </ol>
            </div>
            <div className='text-white' style={{margin: '5% 5%'}}>
                <h4>Hello, my name is</h4>
                <h1>Akshay Rakhunde</h1>
                <h2>I'm a Full Stack Web Developer</h2>
                <button className='btn btn-danger p-2 ps-4 pe-4 mt-3' style={{fontSize: '1.3em'}}>Hire Me</button>
            </div>
        </header>
    )
}