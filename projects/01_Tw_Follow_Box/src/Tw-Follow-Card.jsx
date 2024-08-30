import { useState } from "react"

export function TwFollowCard({name,username}){

    const [isFollowing,setIsFollowing] = useState(false)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-follow-card-follow-button is-following' 
    : 'tw-follow-card-follow-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className="tw-follow-card" style={{display:'flex',alignItems:'center',color:'black'}}>
            <header className="tw-follow-card-header">
                <img 
                className="tw-follow-card-avatar" 
                alt='Avatar del usuario' 
                src={`https://unavatar.io/${username}`}>

                </img>
                <div className="tw-follow-card-info">
                    <strong className="tw-follow-card-name">{name}</strong>
                    <span className="tw-follow-card-username">@{username}</span>
                </div>
            </header>
            <aside className="Boton-Follow"> 
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}