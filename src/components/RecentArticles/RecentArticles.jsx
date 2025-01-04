import React from 'react'
import styles from "./RecentArticles.module.scss";
import 'swiper/swiper-bundle.min.css'; // Импорт стилей
import 'swiper/modules/pagination/pagination.min.css'; // Импорт стилей для пагинации

import { Navigation, Pagination } from 'swiper'; // Импорт модулей

import './ImageSlider.scss';
const RecentArticles = () => {



  return (


    <>
      <section>
        <div className="container">

       
        <div className={styles.wrapper}>

          <nav className={styles.nav}>
            <div>
              <p>OUR ARTICLES</p>
              <h1>Stay Up-to-Date with Our VR Insights</h1>
            </div>
            <button>see all</button>
          </nav>

          <div className={styles.box}>

            <div className={styles.Popular}>
            
            </div>
            
            <div className={styles.Recent}>
              <h1>Recent Article</h1>
              <div className={styles.cards}>

                <div className={styles.card}>
                  <div className={styles.img}><img src="/Recent-1.png" alt="" /></div>
                    <div className={styles.text}>
                      <h4>VR Education</h4>
                      <h3>The Future of Education: How VR is Revolutionizing the Classroom</h3>
                    </div>
                    <button><img src="/arow.svg" alt="" /></button>
                </div>


                <div className={styles.card}>
                  <div className={styles.img}><img src="/Recent-2.png" alt="" /></div>
                    <div className={styles.text}>
                      <h4>VR Education</h4>
                      <h3>The Future of Education: How VR is Revolutionizing the Classroom</h3>
                    </div>
                    <button><img src="/arow.svg" alt="" /></button>
                </div>

                <div className={styles.card}>
                  <div className={styles.img}><img src="/Recent-3.png" alt="" /></div>
                    <div className={styles.text}>
                      <h4>VR Education</h4>
                      <h3>The Future of Education: How VR is Revolutionizing the Classroom</h3>
                    </div>
                    <button><img src="/arow.svg" alt="" /></button>
                </div>

                <div className={styles.card}>
                  <div className={styles.img}><img src="/Recent-2.png" alt="" /></div>
                    <div className={styles.text}>
                      <h4>VR Education</h4>
                      <h3>The Future of Education: How VR is Revolutionizing the Classroom</h3>
                    </div>
                    <button><img src="/arow.svg" alt="" /></button>
                </div>

                <div className={styles.card}>
                  <div className={styles.img}><img src="/Recent-2.png" alt="" /></div>
                    <div className={styles.text}>
                      <h4>VR Education</h4>
                      <h3>The Future of Education: How VR is Revolutionizing the Classroom</h3>
                    </div>
                    <button><img src="/arow.svg" alt="" /></button>
                </div>

                <div className={styles.card}>
                  <div className={styles.img}><img src="/Recent-3.png" alt="" /></div>
                    <div className={styles.text}>
                      <h4>VR Education</h4>
                      <h3>The Future of Education: How VR is Revolutionizing the Classroom</h3>
                    </div>
                    <button><img src="/arow.svg" alt="" /></button>
                </div>

              </div>
              <button className={styles.btn}>see all</button>
            </div>

          </div>

        </div>
        </div>
      </section>
    </>
  )
}

export default RecentArticles