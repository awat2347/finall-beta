import React from 'react'
import s from './our_service.module.scss'


const Our_service = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className={s.wrapper}>

                    <nav className={s.nav}>
                    <div className={s.text}>
                        <p>OUR SERVICE</p>

                        <h1>Our Service</h1>
                    </div>

                    <div className={s.p}>
                        <p>We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.</p>
                    </div>
                    
                    </nav>

                <div className={s.box}>

                <div className={s.vr_block_1}>

                    <div className={s.vr}>
                        <img src="/vr-1.png" alt="" />

                        <div>
                            <h1>VR Development</h1>
                            <p>From concept to creation, our team of VR developers will bring your vision to life.</p>
                        </div>
                    </div>


                    <div className={s.vr}>
                        <img src="/vr-2.png" alt="" />

                        <div>
                            <h1>VR Games</h1>
                            <p>We offer a wide selection of VR games that are suitable for players of all ages and skill levels.</p>
                        </div>
                    </div>
                    </div>

                     <div className={s.vr_block_2}>

                    <div className={s.vr}>
                        <img src="/vr-3.png" alt="" />

                        <div>
                            <h1>VR Design</h1>
                            <p>Our talented VR designers will create immersive and engaging environments that will captivate your audience.</p>
                        </div>
                    </div>


                    <div className={s.vr}>
                        <img src="/vr-4.png" alt="" />

                        <div>
                            <h1>VR Events</h1>
                            <p>We offer a wide selection of VR games that are suitable for players of all ages and skill levels.</p>
                        </div>
                    </div>
                    </div>

                     <div className={s.vr_block_3}>

                    <div className={s.vr}>
                        <img src="/vr-5.png" alt="" />

                        <div>
                            <h1>VR Consulting</h1>
                            <p>Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.</p>
                        </div>
                    </div>


                    <div className={s.vr}>
                        <img src="/vr-6.png" alt="" />

                        <div>
                            <h1>VR Entertainment</h1>
                            <p>reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.</p>
                        </div>
                    </div>
                    </div>

                </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Our_service