import React from 'react'
import NewsMiniNav from './NewsMiniNav'



import articleAndNews1 from '../../assets/images/articles-and-news-1.png'
import articleAndNews2 from '../../assets/images/articles-and-news-2.png'
import articleAndNews3 from '../../assets/images/articles-and-news-3.png'
import articleAndNews4 from '../../assets/images/articles-and-news-4.png'
import articleAndNews5 from '../../assets/images/articles-and-news-5.png'
import articleAndNews6 from '../../assets/images/articles-and-news-6.png'
import articleAndNews7 from '../../assets/images/articles-and-news-7.png'
import articleAndNews8 from '../../assets/images/articles-and-news-8.png'
import articleAndNews9 from '../../assets/images/articles-and-news-9.png'
import ArticleandnewsNinepics from './ArticleandnewsNinepics'

const NewsBody = () => {
  return (
    <>

    <NewsMiniNav navPieceOne="Home" navPieceTwo="News" title="News & Articles"/>
    <section className="article-and-news-9">
    <div className="container">
    <div className="title-container">
      <div className="section-title">
        <h2>Our News & Articles</h2>
      </div>
    </div>
    <div className="how-to-section">
    <ArticleandnewsNinepics title="How To Use Digitalization In The Classroom" imageSrc={articleAndNews1} customClass="yellow-rectangle-3" dateClassName="mars-13" day="13" month="Mar" />
    <ArticleandnewsNinepics title="How To Implement Chat GPT In Your Projects"  imageSrc={articleAndNews2} customClass="yellow-rectangle-2" dateClassName="mars-17" day="17" month="Mar" />
    <ArticleandnewsNinepics title="The Guide To Support Modern CSS Design" imageSrc={articleAndNews3} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="Why You Need To Implement The Five S's" imageSrc={articleAndNews4} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="Get More Involved With Your End Users" imageSrc={articleAndNews5} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="Guided Tour Of Our New Head Office In Stockholm" imageSrc={articleAndNews6} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="Using Business Intelligence To Get Insights Into Our Businesses" imageSrc={articleAndNews7} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="Apple Has Released New Products. Are They Any Good?" imageSrc={articleAndNews8} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="How To Improve Your Teams And Get A Better Result" imageSrc={articleAndNews9} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    </div>
    
    <div className="number-container">
      <div className="arrows">{<i class="fa-solid fa-angle-left"></i>}</div>
      <div className="number-box">1</div>
      <div className="number-box">2</div>
      <div className="number-box">3</div>
      <div className="number-box">{'...'}</div>
      <div className="number-box">9</div>
      <div className="arrows">{<i class="fa-solid fa-angle-right"></i>}</div>
    </div>
    
    </div>
    
    </section>
    
   
    
    
    </>
  )
}

export default NewsBody