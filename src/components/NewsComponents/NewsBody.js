import React from 'react'
import NewsMiniNav from './NewsMiniNav'



import articleAndNews1 from '../../assets/images/articles-and-news-1.png'
import articleAndNews2 from '../../assets/images/articles-and-news-2.png'
import articleAndNews3 from '../../assets/images/articles-and-news-3.png'
import ArticleandnewsNinepics from './ArticleandnewsNinepics'

const NewsBody = () => {
  return (
    <>

    <NewsMiniNav navPieceOne="Home" navPieceTwo="News" title="News & Articles"/>
    <ArticleandnewsNinepics title="How To Use Digitalization In The Classroom" imageSrc={articleAndNews1} customClass="yellow-rectangle-3" dateClassName="mars-13" day="13" month="Mar" />
    <ArticleandnewsNinepics title="How To Implement Chat GPT In Your Projects"  imageSrc={articleAndNews2} customClass="yellow-rectangle-2" dateClassName="mars-17" day="17" month="Mar" />
    <ArticleandnewsNinepics title="The Guide To Support Modern CSS Design" imageSrc={articleAndNews3} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="The Guide To Support Modern CSS Design" imageSrc={articleAndNews3} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="The Guide To Support Modern CSS Design" imageSrc={articleAndNews3} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="The Guide To Support Modern CSS Design" imageSrc={articleAndNews3} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="The Guide To Support Modern CSS Design" imageSrc={articleAndNews3} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="The Guide To Support Modern CSS Design" imageSrc={articleAndNews3} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="The Guide To Support Modern CSS Design" imageSrc={articleAndNews3} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    
    
    
    </>
  )
}

export default NewsBody