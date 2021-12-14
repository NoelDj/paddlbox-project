/*import next from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'*/
import React, { useEffect, useRef, useState } from 'react'
 import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const scrollElements = [
  {
    id: "keyart-0",
    speedY: 0,
    speedX: 0
  },{
    id: "keyart-1",
    speedY: -2,
    speedX: 0
  },{
    id: "keyart-2",
    speedY: 2,
    speedX: 0
  },{
    id: "keyart-3",
    speedY: 3,
    speedX: 0
  },{
    id: "keyart-4",
    speedY: 0,
    speedX: 0
  },{
    id: "keyart-5",
    speedY: 0,
    speedX: -25
  },{
    id: "keyart-6",
    speedY: 0,
    speedX: 0
  },{
    id: "keyart-7",
    speedY: 2,
    speedX: 0
  },
]


export default function Home() {
  const eRef = useRef(null)
  const rRef = useRef([])
  rRef.current = []
  
  useEffect(()=>{
    rRef.current.forEach((e,index) => {
      console.log(e.dataset.speedy)
      gsap.to(e, {
        yPercent: e.dataset.speedy,
        xPercent: e.dataset.speedx,
        duration: 4,
        scrollTrigger: {
          trigger: "header",
          start: "top top",
          scrub: true
        }
      })
    })
  },[])

  const addToRef = (e) => {
    if(e && !rRef.current.includes(e)){
      rRef.current.push(e)
    }
    console.log(e)
  }
  

  return (
    <main className="landing-page">
      <div className="order">
          <div className="container h-100 d-flex align-items-center justify-content-center flex-column">
            <h1 className='mb-5'>Welcome To PaddlBox</h1>
            <form className='d-flex bg-white p-2 rounded'>
              <input type="date" className='m-1'/>
              <input type="date" className='m-1'/>
              <input type="text" className='m-1' name="" id="" />
              <Link href="/checkout">
              <a className='btn btn-primary m-1'>Order</a>

              </Link>
            </form>
          </div>
        </div>
      <section className="keyart" id="parallax">
        {scrollElements.map(({id,speedY, speedX})=>{
          return(
            <div className="keyart_layer parallax" key={id} id={id} ref={addToRef} data-speedX={speedX} data-speedY={speedY} />

          )
        })}
        
        <div className="custom-shape-divider-bottom-1639338594">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>

        



    </section>

    <div className="wrapper">

    <section className='about-paddlbox h-100 d-flex align-items-center justify-content-center'>
      <div className="container h-100">
        <div className="row">
          <div className="col-6">
            <img src="images/boards.png" alt="" />
          </div>
          <div className="col-6">
            <h2 className='title text-primary'>What is Paddlebox?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio a ex suscipit, autem ratione consequatur laborum explicabo aspernatur delectus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio a ex suscipit, autem ratione consequatur laborum explicabo aspernatur delectus!</p>

          </div>
        </div>
      </div>
    </section>

      <section className='' id='how-to'>
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex flex-column justify-content-center py-5">
            <h2 className="title text-primary mb-0">
                  How it Works
                </h2>
                <p className='text-primary mb-5'>To get started follow this simple concept</p>
                <div className="card mb-3">
                  <div className="row d-flex align-items-center p-2">
                    <div className="col-1">
                      <span>1</span>
                    </div>
                    <div className="col-11">
                      <h3>Book It</h3>
                      <p>Book a paddleboard on demand</p>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row d-flex align-items-center p-2">
                    <div className="col-1">
                      <span>1</span>
                    </div>
                    <div className="col-11">
                      <h3>Book It</h3>
                      <p>Book a paddleboard on demand</p>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row d-flex align-items-center p-2">
                    <div className="col-1">
                      <span>1</span>
                    </div>
                    <div className="col-11">
                      <h3>Book It</h3>
                      <p>Book a paddleboard on demand</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row d-flex align-items-center p-2">
                    <div className="col-1">
                      <span>1</span>
                    </div>
                    <div className="col-11">
                      <h3>Book It</h3>
                      <p>Book a paddleboard on demand</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-6 p-5">
              <div>
                <img src="/images/people-using-paddleboard-flat-illustration.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="locations">
        <div className="container">
          <div className="row justify-content-center mb-5 text-center">
            <div className="col-lg-5">
                <p className="font-weight-bold">Our Locations</p>
                <h2 className="title">
                  We have set up paddleboxes at these locations.
                </h2>
            </div>
          </div>
          <div className="row text-white">
            <div className="col-lg-3 col-md-6 px-3">
              <div className="img-box">
                <img src="https://live.staticflickr.com/3920/14458423981_a97c2de412_b.jpg" alt="Amager Strand" className="img-fluid" />
                <h3>Amager Strand</h3>
              </div>
            </div>            
            <div className="col-lg-3 col-md-6 px-3">
              <div className="img-box">
                <img src="https://cdn.pixabay.com/photo/2018/05/28/21/58/he-dune-3437288_1280.jpg" alt="" className="img-fluid"/>
                <h3>Han Klit Strand</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 px-3">
              <div className="img-box">
                <img src="https://live.staticflickr.com/3748/14299905941_ca517049c7_b.jpg" alt="" className="img-fluid"/>
                <h3>Grenaa Strand</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 px-3">
              <div className="img-box">
                <img src="https://files.guidedanmark.org/files/468/88142_Blvand_Strand.jpg" alt="" className="img-fluid"/>
                <h3>Blaavand Strand</h3>
              </div>
            </div>
          </div>
        </div>
      </section>


    <section id="video-section">
      <div className="container">
        <div className="row justify-content-center mb-5 text-center">
          <div className="col text-white">
            <div className="iframe-wrapper">
              <iframe src="https://www.youtube.com/embed/t8H4TDi6XWk" />
            </div>
            <h2 className="font-weight-bold mt-2">Watch this video</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="https://openclipart.org/download/324161/deserted-beach-publicdomainvectorsorgai.svg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the cards content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="https://openclipart.org/download/324161/deserted-beach-publicdomainvectorsorgai.svg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the cards content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="https://openclipart.org/download/324161/deserted-beach-publicdomainvectorsorgai.svg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the cards content.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    </div>
 
      
    </main>
  )
}

            {/*  */}