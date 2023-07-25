"use client"

import BasicCard from '@/components/BasicCard'
import BossCard from '@/components/BossCard'
import RouteButton from '@/components/RouteButton'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`}>
      
      <div className='container'>
        <div className='row w-100'>
          <div className='col-5 d-flex flex-column justify-content-center'>
            <h2 className='py-3 fw-bold'>이 건물의 평균 건축비용은<br/> ~만원이에요!</h2>
            <ul className='py-1'>
              <li><span className='fs-5'>평균비용~최고비용 편차 : ~만원</span></li>
              <li><span className='fs-5'>평균 공사기간 : ~개월</span></li>
              <li><span className='fs-5'>하자 발생 : x건</span></li>
              <li><span className='fs-5'>트러스 평점 : ~/5.0</span></li>
              <li><span className='fs-5'>건축사 사무소 : ~~회사</span></li>
            </ul>
          </div>

          <div className='col-7'>
            <div>
              <button type="button" className="px-3 btn btn-outline-secondary rounded-lg"
                onClick={()=>{console.log(1)}}>
                외부
              </button>
              <button type="button" className="px-3 btn btn-outline-secondary rounded-lg"
                onClick={()=>{console.log(2)}}>
                내부
              </button>
            </div>

            <div>
              <Image
                className={`styles.logo m-3`}
                src="/logo.png"
                alt="Truss Logo"
                width={700}
                height={250}
                priority
              />
            </div>

            <div>
              <RouteButton className={"mx-4 px-4 py-2 btn btn-primary rounded-lg"} url={'/next4'}>장바구니 담기</RouteButton>
              <RouteButton className={"mx-4 px-4 py-2 btn btn-primary rounded-lg"} url={'/next3'}>집들이 하러가기</RouteButton>
              <RouteButton className={"mx-4 px-4 py-2 btn btn-primary rounded-lg"} url={'/next3'}>원스톱 의뢰하기</RouteButton>
            </div>

          </div>
        </div>
      </div>

      <div className='row mx-3 mt-5 mb-3'>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
      </div>

      <div className='row mx-3 mt-5 mb-3'>
        <BossCard url={"next2"} className="py-3 my-3" />
      </div>
      
    </main>
  )
}
