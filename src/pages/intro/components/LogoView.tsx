interface LogoView {
    src: string | string[];
    alt: string;
    height?: number;
}


export default function LogoView({ src, alt, height = 26 }: LogoView) {
    let logosToRender;
    if (Array.isArray(src)) {
        logosToRender = src.map(imgSrc => {
            return <img src={imgSrc} key={imgSrc} style={{ height: `${height}px` }} alt={alt} />
        }) as unknown as string[];
    } else {
        logosToRender = <img src={src} style={{ height: `${height}px` }} alt={alt} />
    }
    return (
        <figure className="flex justify-center items-center gap-x-3">
            {logosToRender}
        </figure>
    )
}

