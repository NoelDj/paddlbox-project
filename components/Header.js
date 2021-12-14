import Link from 'next/link'

const Header = () => {
    return ( 
        <header className="py-3">
            <div className="container d-flex flex-wrap justify-content-center ">
                <Link href="/">
                 <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="logo">PaddlBox</span>
                </a>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link href="/cart">
                            <a className="nav-link active" aria-current="page">Book Now</a>
                        </Link>
                    </li>
                            
                </ul>
            </div>
      
        </header>
     );
}
 
export default Header;
