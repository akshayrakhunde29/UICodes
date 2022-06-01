import '../potfolioWebsite/index.css';
export default function FooterComponent()
{
    return(
        <footer>
            <div style={{backgroundColor: 'rgba(0,0,0,0.7)'}} className='p-4 text-white'>
                <h1 className='text-center mt-3 mb-3'>JOIN-WITH-ME</h1>
                <ol style={{fontSize: '20px'}} className="pt-4 list-unstyled d-flex justify-content-around text-center">
                    <li><span className='bi bi-instagram d-block'></span><a href='#'>See my instagram</a></li>
                    <li><span className='bi bi-facebook d-block'></span><a href='#'>See my instagram</a></li>
                    <li><span className='bi bi-twitter d-block'></span><a href='#'>See my instagram</a></li>
                    <li><span className='bi bi-linkedin d-block'></span><a href='#'>See my instagram</a></li>
                    <li><span className='bi bi-github d-block'></span><a href='#'>See my instagram</a></li>
                </ol>
                <p className='text-center pt-5'>inspirition taken from @Youtube and @Google</p>
            </div>
        </footer>
    )   
}