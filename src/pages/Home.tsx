export function Home() {
	return (
		<>
			<div className='flex justify-center'>
				<div className='flex flex-col items-center justify-between h-screen'>
					<div className='mt-48 short:mt-16'>
						<h1 className='text-6xl font-bold'>Welcome</h1>
					</div>
					<div className='flex flex-col mb-40 short:mb-12'>
						<label className='mb-3 text-lg font-bold'>
							Lobby Code
						</label>
						<div className='flex flex-col items-center md:flex-row'>
							<input
								className='border-black border-[0.215rem] md:w-96 w-full h-12 px-3 font-bold text-xl uppercase'
								type='text'
								maxLength={4}
							/>
							<button className='w-full px-10 py-3 mt-5 font-semibold text-white bg-purple-600 md:ml-5 md:mt-0 md:w-fit'>
								Join
							</button>
						</div>
					</div>
					<div className='flex flex-col items-center mb-10 text-lg font-bold md:flex-row'>
						<p>First one here?</p>
						<button className='md:ml-5 bg-[#adadad] px-5 py-2 md:mt-0 mt-2'>
							Create Room
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
