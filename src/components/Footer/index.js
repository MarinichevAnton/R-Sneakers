import './Footer.module.scss';

function Footer () {
    return (
        <footer className="Image d-flex justify-center align-center p-40">
    <div className="d-flex align-center">
        <img width={40} height={40} src="img/logo.png" alt="Logotype" />
    </div>
    <div className='pl-15'>
            <h3 className="text-uppercase">Site created by Marinichev Anton Viktorovich</h3>
        </div>
</footer>
    );
};

export default Footer;