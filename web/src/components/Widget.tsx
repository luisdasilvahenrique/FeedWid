import { ChatTeardropDots } from "phosphor-react"
import { useState } from "react"

export function Widget(){
    const [isWidgtIsOpen, setIsWidgtIsOpen] = useState(false);

    function toggleWidgetVisibility(){
        setIsWidgtIsOpen(!isWidgtIsOpen)
    }
    return (
        <div className="absolute bottom-4 right-4">
            { isWidgtIsOpen && <p>Hello World</p> }


            <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
            <ChatTeardropDots className="w-6 h-6" />
            


            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 easy-linear">
               <span className="pl-2" >Feedback</span> 
            </span>
            </button>
        </div>
    )
        
}