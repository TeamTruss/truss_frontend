"use client"

import { useRouter } from "next/navigation";

type PostCardProps = {
  data: DataProps
}

type DataProps = {
  category: string,
  title: string,
  text: string,
  author: string,
  profilePicture:string,
  timestamp: number,
  viewCount: number,
  commentCount: number,
  likeCount:number
}

export default function PostCard (props: PostCardProps) {
  const { data } = props;
  const router = useRouter();
  
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card rounded-5 p-2" onClick={()=>{router.push(`/community?posts=${data.title}`);}}>
        <div className={`card-header rounded-top-5 bg-${"white"} border-${"white"}`}>
          <div className="fw-normal d-flex justify-content-between mx-2">
          <span>{data.category}</span>
            <span>{data.timestamp}</span>
            </div>
          <div className="fw-bold my-2">{data.title}</div>
        </div>
        <div className="card-body fw-normal">
          {data.text}
        </div>
        <div className={`card-footer rounded-bottom-5 bg-${"white"} border-${"white"} fw-normal`}>
          <div className="d-flex">
            <img src={data.profilePicture} width={40} height={40}/>
            <div className="mx-3 fw-bold align-self-center">{data.author}</div>
          </div>
          <div className="fw-normal d-flex justify-content-end">
            <div className="m-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{data.viewCount}</span>
            </div>
            <div className="m-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              <span>{data.likeCount}</span>
              </div>
            <div className="m-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
              <span>{data.commentCount}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}