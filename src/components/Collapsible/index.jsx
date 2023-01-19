import { useState } from 'react'
import '../../styles/Collapsible.css'

function Collapsible({ aboutTitle, aboutContent }) {
    const [open, setOpen] = useState(false)

    const opening = () => {
        setOpen(!open)
    }

    return (
        <div className="collapsible--container">
            <h3
                onClick={opening}
            >
                {aboutTitle}
                <span className={'arrow' + (open ? ' down' : ' up')} />
            </h3>
            {open && <div className='content'>{aboutContent}</div>}
        </div>
    )
}

export default Collapsible
