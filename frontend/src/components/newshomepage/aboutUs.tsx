import './aboutUs.css';

const AboutUs: React.FC = () => {

    return (

        <div className="container-flex p-5 ">
            <div className="container ">
                <div className="row w-100 g-4 border__colored">
                    <div className="col-lg-6 visible">
                        <div className="img-border mx-4  ">
                            <div className="img-borders ">
                                <img className="img-fluid" alt="man"
                                    src="https://media.istockphoto.com/photos/mature-businessman-wearing-telephone-headset-talking-to-caller-in-picture-id1190166000?k=20&m=1190166000&s=612x612&w=0&h=-TRtqusLJXK4OG9z3pMq7Ne6M13hZQHb7Z9hWf0AtXQ="></img>
                            </div>
                            <div className="img-blur">
                                <img className="bg-opacity-10 img-fluid"
                                    src="/images/blur.png" alt="blur"></img>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-center color__text">
                        <h1 className="mb-2">Our Mission, Vision and Values</h1>
                        <p >
                            To inspire learning and improve lives through education, training and skills development that supports social and economic success for our students, businesses and communities across West London.
                        </p>
                        <p className="start__text">
                            To be the leading college in West London for technical and vocational education and skills training.
                            We will all take personal responsibility for driving success, overcoming barriers and finding solutions. We will be constantly learning and developing.
                        </p>
                        <p className="start__values">
                            We will strive to be the best in all areas of strategic importance to the college, enabling our students, employers and staff to achieve high expectations and ambitious goals.
                            We will be innovative in our thinking, striving to embed new and original practices that will underpin everything we do.
                        </p>
                    </div>
                    <div className="row m-5">
                        {/* <h1 >oooo</h1> */}
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 py-md-3 py-sm-3 text-center">
                        <div className="course__style px-0">
                            <div className="card__courseFinder" id="courseFinder">
                                <h3 className='text__color'>
                                    QUICK COURSE FINDER
                                </h3>
                            </div>
                            <div className="my-5  finder">
                                <a href="/" className="btn rounded-pill w-100">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 py-md-3 py-sm-3 text-center">
                        <div className="course__style">
                            <div className="card__paying" id="paying">
                                <h3 className='text__color'>
                                    PAYING YOUR FEES
                                </h3>
                            </div>
                            <div className="mt-5 pay">
                                <a href="/" className="btn rounded-pill w-100">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 py-sm-3 text-center">
                        <div className="course__style">
                            <div className="card__studentService" id="studentService">
                                <h3 className='text__color'>
                                    STUDENT SERVICES
                                </h3>
                            </div>
                            <div className="mt-5 student">
                                <a href="/" className="btn rounded-pill w-100">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 py-sm-3 text-center">
                        <div className="course__style">
                            <div className="card__jobs" id="jobs">
                                <h3 className='text__color'>
                                    JOBS FOR STUDENTS
                                </h3>
                            </div>
                            <div className="mt-5 jobs">
                                <a href="/" className="btn rounded-pill w-100">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default AboutUs;