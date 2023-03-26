export function Inputbar({filterer}) {
    return   <div
        className=' h-1/5 flex flex-col text-center justify-center pl-5 pr-5'>
        <span className='text-3xl mb-3'>😏Emoji search😤</span>
        <input type='text' onChange={filterer} placeholder='Search' className='h-10 border border-gray-400 rounded'/>
    </div>;
}
