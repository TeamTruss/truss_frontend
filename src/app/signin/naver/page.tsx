"use client"

import useNaverSignin from "@/hooks/useNaverSignin";

export default function NaverLoginPage () {
	const isLoading=true;
	useNaverSignin();
	return (
		<div>
		...
		{isLoading ? 
			<div>
					...
					...
			</div>
			: <div /> // 로딩 이후의 작업을 해주는 컴포넌트(서비스의 방향에 맞게)
		}
		</div>
	)
}