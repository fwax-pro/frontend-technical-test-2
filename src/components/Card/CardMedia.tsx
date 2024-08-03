export interface MediaProps {
    component: 'img'
    src: string
    alt: string
}

export const Media = ({src, alt, component = 'img'}:MediaProps) => {
    let componentRender = null;

    switch(component) {
        case 'img':
            componentRender = <img className="w-full h-full object-cover" src={src} alt={alt}/>
    }

    return (
        <div tabIndex={1} className="w-88 h-52">
            {componentRender}
        </div>
    )
}

Media.displayName = 'Card.Media'