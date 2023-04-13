import React, { useEffect, useContext } from 'react';
import '../css/style.css';
import '../css/home.css';
import Navbar from './navBar.js';
import { Link, useNavigate } from 'react-router-dom';



const Home = () => {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
      };
    return (
        
        <div>

            <Navbar />

            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Welcome To Our Studio!</div>
                    <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                    <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
                </div>
            </header>

            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Servicios</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-solid fa-handshake-angle fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="my-3">Elaboración de manuales de procedimiento de cobro coactivo.</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-solid fa-book  fa-stack-1x fa-inverse" ></i>
                            </span>
                            <h4 className="my-3">sesoría jurídica para procesos de cobro coactivo para entidades públicas.</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="my-3">Asesoría jurídica para procesos de cobro coactivo para abogados</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Documentos</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">

                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={process.env.PUBLIC_URL +"/img/portfolio/1.jpg"} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Prescripción Predial</div>
                                    <div className="portfolio-caption-subheading text-muted">Document</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={process.env.PUBLIC_URL +"/img/about/1.jpg"} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2009-2011</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={process.env.PUBLIC_URL +"/img/portfolio/2.jpg"} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 className="subheading">An Agency is Born</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid"src={process.env.PUBLIC_URL +"/img/portfolio/3.jpg"} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>December 2015</h4>
                                    <h4 className="subheading">Transition to Full Service</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid"src={process.env.PUBLIC_URL +"/img/portfolio/4.jpg"} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>July 2020</h4>
                                    <h4 className="subheading">Phase Two Expansion</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Be Part
                                    <br />
                                    Of Our
                                    <br />
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={process.env.PUBLIC_URL +"/img/team/1.jpg"} alt="..." />
                                <h4>Parveen Anand</h4>
                                <p className="text-muted">Lead Designer</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={process.env.PUBLIC_URL +"/img/team/2.jpg"} alt="..." />
                                <h4>Diana Petersen</h4>
                                <p className="text-muted">Lead Marketer</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={process.env.PUBLIC_URL +"/img/team/3.jpg"} alt="..." />
                                <h4>Larry Parker</h4>
                                <p className="text-muted">Lead Developer</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>

            <div className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={process.env.PUBLIC_URL +"/img/logos/microsoft.svg"}  alt="..." aria-label="Microsoft Logo" /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={process.env.PUBLIC_URL +"/img/logos/google.svg"}  alt="..." aria-label="Google Logo" /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={process.env.PUBLIC_URL +"/img/logos/facebook.svg"}  alt="..." aria-label="Facebook Logo" /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto"  src={process.env.PUBLIC_URL +"/img/logos/ibm.svg"}  alt="..." aria-label="IBM Logo" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>

                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">

                                    <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-group">

                                    <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div className="form-group mb-md-0">

                                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">

                                    <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center text-white mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>

                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>

                        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                    </form>
                </div>
            </section>

            <footer className="footer py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
                        <div className="col-lg-4 my-3 my-lg-0">
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                            <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={process.env.PUBLIC_URL +"/img/close-icon.svg"} alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">

                                        <h2 className="text-uppercase">Prescripción Predial</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src={process.env.PUBLIC_URL +"/img/portfolio/1.jpg"} alt="..." />
                                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            {/*
                                        <li>
                                            <strong>Client:</strong>
                                            Threads
    </li>*/}
                                            <li>
                                                <strong>Category:</strong>
                                                Document
                                            </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button" >
                                             <Link to='/documents' style={linkStyle}>Obtener</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








        </div>
    );
}

export default Home;