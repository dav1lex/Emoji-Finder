import emojilist from "./emojiList.json";

export function EmojiFilter({searchtext}) {

    return emojilist.filter((emoji) => {
        if (emoji.title.toLowerCase().includes(searchtext)) {
            return true
        } else if (emoji.keywords.toLowerCase().includes(searchtext)) {
            return true
        } else {
            return false
        }
    }).slice(0, 30).map((el) => {
        return (<div
            className='h-14 group  border border-t-gray-400
                         hover:bg-gray-100 flex flex-row items-center
                          pl-5 pr-20 text-2xl hover:cursor-pointer' onClick={() => {
            navigator.clipboard.writeText(el.symbol)
        }}>
            <img alt='emo' width={30}
                 src={`https://cdn.jsdelivr.net/npm/emojione-assets@4.5.0/png/128/${el.symbol.codePointAt(0).toString(16)}.png`}/>
            {/*/png/128/*/}
            <span className='ml-3'>{el.title}</span>
            <span
                className='ml-auto text-gray-200 hidden group-hover:inline select-none'>Click to copy</span>
        </div>)
    })
}