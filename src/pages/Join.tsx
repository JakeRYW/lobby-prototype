type JoinProps = {
	code: string;
};

export function Join({ code = '????' }: JoinProps) {
	return (
		<>
			<div className='flex flex-col justify-between h-screen'>
				<div className='flex flex-row items-center mt-4 mr-5 -ml-1'>
					<button className='ml-5 bg-[#adadad] px-5 py-2 md:mt-0 mt-2 font-bold'>
						Back
					</button>
					<p className='ml-auto text-xl font-semibold'>
						Room: <span className='font-bold'>{code}</span>
					</p>
				</div>
				<div className='flex justify-center'>
					<div className='flex flex-col items-center'>
						<h2 className='text-3xl font-bold'>
							Please draw yourself
						</h2>
						<div className='mt-10 md:h-[500px] md:w-[500px] h-80 w-80 rounded-full border border-[0.1575rem] border-black' />
					</div>
				</div>
				<div className='flex flex-row justify-center md:mb-56 mb-36'>
					<button className='bg-[#adadad] px-7 py-2 md:mt-0 mt-2 font-bold'>
						Clear
					</button>
					<button className='py-2 mt-2 ml-5 font-bold text-white bg-purple-600 px-7 md:mt-0'>
						Done
					</button>
				</div>
			</div>
		</>
	);
}
