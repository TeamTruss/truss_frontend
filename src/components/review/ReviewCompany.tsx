import RatingInfo from "./Ratinginfo";
import SatisfactionText from "./RatingSatisfiy";
import ReviewCard from "./ReviewCard";

type ReviewCompanyProps = {
  title?: string;
  className?: string;
  company: any;
};

export default function ReviewCompany(props: ReviewCompanyProps) {
  const { title, className, company } = props;

  return (
    <div className={`${className ? className : ""} shadow rounded-4 my-5`} style={{backgroundColor:"#101648"}}>
      <h5 className="card-title mx-3 my-2 fw-bold">{title}</h5>
      <div className="card-text mx-4 text-white fw-bold px-3 py-5">
        {/* <div className="py-2">시공사</div> */}
        <h2 className="py-2 fw-bold">{company["sigongsa"]}</h2>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div className="me-3 fw-bold fs-4">평균평점</div>
            <RatingInfo rating={company["sigongsaRate"]} />
          </div>
          <div className="fs-5 d-flex justify-content-between">
            <SatisfactionText className="" item="소통" text={company["sotong"]}/>
            <SatisfactionText className="" item="가격" text={company["price"]} />
            <SatisfactionText className="" item="시공결과" text={company["sigongResult"]} />
            <SatisfactionText className="" item="일정준수" text={company["dateJunsu"]} />
            <SatisfactionText className="" item="A/S" text={company["as"]} />
          </div>
        </div>

        {<>{
          company["constructor"].map((constructor: any, i)=>{
            return (
              <ReviewCard key={i}>
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <div className="fs-5 me-3">건축진행</div>
                    <RatingInfo rating={constructor["rate"]} />
                  </div>
                  <div>{constructor["location"]}, {constructor["type"]}</div>
                </div>
                
                {constructor["description"]}
              </ReviewCard> 
            )
          })
        }</>}


      </div>
    </div>
  );
}
