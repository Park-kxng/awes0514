import React, { useState } from 'react';
import "./FilterButtons.css";

// 주변 관광지 찾아보기 - 필터 버튼
const FilterButtons = ({ selectedRecommendFilters, setSelectedRecommendFilters }) => {


  // 버튼을 클릭할 때 실행되는 함수
  const handleButtonClick = (filter) => {
    // 이미 선택된 필터인지 확인
    const index = selectedRecommendFilters.indexOf(filter);

    if (index === -1) {
      // 선택된 필터가 아닌 경우, 선택된 필터 목록에 추가
      setSelectedRecommendFilters([...selectedRecommendFilters, filter]);
    } else {
      // 이미 선택된 필터인 경우, 선택된 필터 목록에서 제거
      setSelectedRecommendFilters(selectedRecommendFilters.filter((item) => item !== filter));
    }
  };

  return (
    <div className="filters">
      <button
        className={selectedRecommendFilters.includes("관광거리") ? "selected_filter_button" : "filter_button"}
        onClick={() => handleButtonClick("관광거리")}
      >
       <div className='font'>🥳 관광거리</div> 
      </button>
      <button
        className={selectedRecommendFilters.includes("명소") ? "selected_filter_button" : "filter_button"}
        onClick={() => handleButtonClick("명소")}
      >

        <div className='font'>🗽 명소</div> 

      </button>
      <button
        className={selectedRecommendFilters.includes("문화") ? "selected_filter_button" : "filter_button"}
        onClick={() => handleButtonClick("문화")}
      >
                <div className='font'>🇰🇷 문화</div> 


      </button>
      <button
        className={selectedRecommendFilters.includes("쇼핑") ? "selected_filter_button" : "filter_button"}
        onClick={() => handleButtonClick("쇼핑")}
      >
                <div className='font'>🛍️ 쇼핑</div> 

      </button>
      <button
        className={selectedRecommendFilters.includes("자연") ? "selected_filter_button" : "filter_button"}
        onClick={() => handleButtonClick("자연")}
      >
                <div className='font'>🍀 자연</div> 

      </button>
      <button
        className={selectedRecommendFilters.includes("음식") ? "selected_filter_button" : "filter_button"}
        onClick={() => handleButtonClick("음식")}
      >
      <div className='font'>🍱 음식</div> 

      </button>
      <button
        className={selectedRecommendFilters.includes("외국인") ? "selected_filter_button" : "filter_button"}
        onClick={() => handleButtonClick("외국인")}
      >
        <div className='font'>외국인</div> 

      </button>
    </div>
  );
};

export default FilterButtons;