import {useState} from "react";
import {Inputbar} from "./Inputbar";
import {EmojiFilter} from "./EmojiFilter";


function App() {
    const [searchtext, setSearchtext] = useState('')

    const filterlistener = (event) => {
        setSearchtext(event.target.value)
    }

    return (
        <div className="w-full h-screen flex flex-col">

            <Inputbar filterer={filterlistener}/>
            <div id='emojilist' className=' h-4/5'>

                <EmojiFilter searchtext={searchtext}/>

            </div>

        </div>
    );
}

export default App;
