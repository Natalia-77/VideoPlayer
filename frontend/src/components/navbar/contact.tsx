import './contact.css';


const ContactBar: React.FC = () => {

    return (
        <div className="container-fluid px-5 py-4 wow fadeIn contact__style" data-wow-delay="0.1s">
            <div className="row  align-items-center d-none d-lg-flex contact__colorback">
                <div className="col-lg-4 col-md-12 text-center text-lg-start">
               <div className="navbar-brand m-2 p-2" >
                   <h1 className="text__fonts">LaSoft 
                   <img src="/images/logos.jpg"  style={{height:'100px',width:'180px',margin:'15px'}} ></img>
                   </h1>
               </div>
                </div>
               
            
            </div>

        </div>



)
};
export default ContactBar;